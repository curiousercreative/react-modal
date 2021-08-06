import React from 'react';

import bindMethods from '../../util/bindMethods';
import isEscapeKeyEvent from '../../util/isEscapeKeyEvent';
import renderIf from '../../util/renderIf';
import timeoutPromise from '../../util/timeoutPromise';
import * as modal from './';
import { addEventListener, body, querySelector, removeEventListener } from '../dom.js';

/**
 * @property  {jsx} children
 * @property  {string} [className]
 * @property  {boolean} [centered = true]
 * @property  {boolean} [dismissable = true] - whether modal can be dismissed
 * @return  {jsx} div
 */
export default class ModalWindow extends React.Component {
  static defaultProps = {
    className: '',
    centered: true,
    dismissable: true,
  };

  state = {
    open: false,
  };
  windowRef = React.createRef();

  constructor (...args) {
    super(...args);
    bindMethods(this);
  }

  componentDidMount () {
    // start the window animation
    this.setState({ open: true });

    // darken background
    // async to allow .modal-container:empty style to clear before applying .modal-container--open
    setTimeout(() => {
      querySelector('.modal-container').classList.add('modal-container--open');
      body.classList.add('modal-open');

      // listen for clicks outside of us
      addEventListener('click', this.onClicks);
      addEventListener('keyup', this.onKeys);
    }, 0);
  }

  componentWillUnmount () {
    querySelector('.modal-container').classList.remove('modal-container--open');
    body.classList.remove('modal-open');

    // stop listening
    removeEventListener('click', this.onClicks);
    removeEventListener('keyup', this.onKeys);
  }

  handleClickClose (e) {
    e.preventDefault();
    modal.close();
  }

  onClicks (e) {
    // close if clicking outside
    if (
      !e.defaultPrevented
      && this.props.dismissable
      && !this.windowRef.current.contains(e.target)
    ) modal.close();
  }

  onKeys (e) {
    if (
      !e.defaultPrevented
      && this.props.dismissable
      && isEscapeKeyEvent(e)
    ) modal.close();
  }

  prepareToClose () {
    // lighten background
    querySelector('.modal-container').classList.remove('modal-container--open');

    // start the closing animation
    this.setState({ open: false });

    return timeoutPromise(modal.ANIMATION_DURATION);
  }

  render () {
    let classes = this.props.className.split(' ').concat([ 'modal', 'modal__window' ]);

    if (this.state.open) classes.push('modal--open');
    if (this.props.centered) classes.push('modal__window--centered');

    return (
      <div className={classes.join(' ')} ref={this.windowRef}>
        {renderIf(this.props.dismissable, () => (
          <button className="modal__close" onClick={this.handleClickClose} type="button" />
        ))}
        {this.props.children}
      </div>
    );
  }
}
