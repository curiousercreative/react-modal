/**
 * @module lib/modal
 * @example
 * import * as modal from '@curiouser/react-modal';
 *
 * // open a modal
 * modal.open('Hello World');
 *
 * // close the modal
 * modal.close()
 *
 * // open a modal with contents connected to the store, center it and don't allow user to close
 * let props = { center: true, dismissable: false };
 * modal.open(SomeComponent, this, props);
 */

import { Pubsub } from '@curiouser/pubsub';
import React from 'react';
import ReactDOM from 'react-dom';

import ModalWindow from './ModalWindow';

export const pubsub = new Pubsub();

/**
 * @const {number}
 */
export const ANIMATION_DURATION = 250; // ms
let isPortal; // Boolean of whether modal is rendered via portal
let modal; // modal component
let mountEl; // DOM Element modal is mounted at
let onClose;
let queue = Promise.resolve();

/**
 * storeModalRef - store a reference to the mounted modal component
 * @param  {React.Component} modalInstance
 */
function storeModalRef (modalInstance) {
  modal = modalInstance;
}

/**
 * public function for closing any open modal
 * @function close
 * @async
 * @return {Promise} - when the modal is closed
 */
export function close () {
  if (modal) {
    // this will start the close animation
    queue = queue
      // allow modal view component to animate out
      .then(modal.prepareToClose)
      // unmount modal if not rendered within a tree as portal
      .then(() => !isPortal && ReactDOM.unmountComponentAtNode(mountEl))
      // callback if provided
      .then(() => typeof onClose === 'function' && onClose())
      // notify subscribers
      .then(() => pubsub.pub('modal.close'));
  }

  return queue;
}

/**
 * public function for opening a modal
 * @function open
 * @param  {jsx} children - the contents of the modal
 * @param  {object} [props] - props to supply to the ModalContainer looking for keys [ className, dismissable, onClose, store ]
 * @param  {string} [mountSelector] - a selector string for document.querySelector
 * for where to mount modal
 * @return {Promise} resolves with the mounted instance once the modal is mounted
 */
export function open (children, props = {}, mountSelector = '.modal-container') {
  // append this modal open to the queue
  queue = queue
    .then(() => new Promise(resolve => {
      // closure intentional
      isPortal = false;
      mountEl = document.querySelector(mountSelector);
      onClose = props.onClose;

      ReactDOM.render(
        render(children, props),
        mountEl,
        resolve
      );
    }))
    .then(() => pubsub.pub('modal.open'))
    .then(() => modal);

  return queue;
}

export function render (children, props = {}) {
  return (
    <ModalWindow ref={storeModalRef} {...props}>
      {children}
    </ModalWindow>
  );
}

export function renderPortal (children, props = {}, mountSelector = '.modal-container') {
  // closure intentional
  isPortal = true;
  mountEl = document.querySelector(mountSelector);
  onClose = props.onClose;

  return ReactDOM.createPortal(
    render(children, props),
    mountEl
  );
}
