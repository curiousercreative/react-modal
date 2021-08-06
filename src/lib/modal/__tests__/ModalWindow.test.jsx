import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, waitForElementToBeRemoved } from '@testing-library/react';

import * as modal from '../';
import ModalWindow from '../ModalWindow';
import { setup, teardown } from './util';

beforeAll(setup);
afterEach(teardown);

describe('ModalWindow tests', () => {
  test('ModalWindow should match snapshot', () => {
    const instance = renderer.create(<ModalWindow>Hey there!</ModalWindow>);
    expect(instance.toJSON()).toMatchSnapshot();
    // bizaare that we have to clean-up...
    instance.unmount();
  });

  test('ModalWindow props should be passed via modal.open', () => {
    return modal
      .open(<div>Hello</div>, { bogus: 'yes' })
      .then(instance => expect(instance.props.bogus).toEqual('yes'));
  });

  test('ModalWindow prop.dismissable should default to true', () => {
    return modal
      .open(<div>Hello</div>)
      .then(instance => expect(instance.props.dismissable).toBeTruthy());
  });

  test('ModalWindow should render close button by default', () => {
    return modal
      .open(<div>Hello</div>)
      .then(() => expect(document.querySelector('.modal__close')).toBeTruthy());
  });

  test('ModalWindow should listen for close button clicks by default', () => {
    return modal
      .open(<div>Hello</div>)
      .then(() => fireEvent.click(document.querySelector('.modal__close')))
      .then(() => waitForElementToBeRemoved(() => document.querySelector('.modal')))
      .then(() => expect(document.querySelector('.modal')).toBeFalsy());
  });

  test('ModalWindow should listen for clicks outside of modal by default', () => {
    return modal
      .open(<div>Hello</div>)
      .then(() => fireEvent.click(document.querySelector('.modal-container')))
      .then(() => waitForElementToBeRemoved(() => document.querySelector('.modal')))
      .then(() => expect(document.querySelector('.modal')).toBeFalsy());
  });

  test('ModalWindow should listen for escape key by default', () => {
    return modal
      .open(<div>Hello</div>)
      // https://testing-library.com/docs/dom-testing-library/api-events#fireeventeventname
      .then(() => fireEvent.keyUp(document.body, { code: 'Escape', key: 'Escape', keyCode: 27 }))
      .then(() => waitForElementToBeRemoved(() => document.querySelector('.modal')))
      .then(() => expect(document.querySelector('.modal')).toBeFalsy());
  });

  test('ModalWindow prop.dismissable=false should disable close button rendering', () => {
    return modal
      .open(<div>Hello</div>, { dismissable: false })
      .then(() => expect(document.querySelector('.modal__close')).toBeFalsy());
  });

  test('ModalWindow prop.dismissable=false should disable clicks outside of modal closing', () => {
    return modal
      .open(<div>Hello</div>, { dismissable: false })
      .then(() => fireEvent.click(document.querySelector('.modal-container')))
      .then(() => expect(document.querySelector('.modal--open')).toBeTruthy());
  });

  test('ModalWindow prop.dismissable=false should disable escape key listener', () => {
    return modal
      .open(<div>Hello</div>, { dismissable: false })
      .then(() => expect(document.querySelector('.modal--open')).toBeTruthy())
      // https://testing-library.com/docs/dom-testing-library/api-events#fireeventeventname
      .then(() => fireEvent.keyUp(document.body, { code: 'Escape', key: 'Escape', keyCode: 27 }))
      .then(() => expect(document.querySelector('.modal--open')).toBeTruthy());
  });
});
