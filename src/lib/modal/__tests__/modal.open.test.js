import React from 'react';
import Modal from './Modal';
import { setup, teardown } from './util';

beforeAll(setup);
afterEach(teardown);

describe('modal.open tests', () => {
  test('modal.open should return promise', () => {
    expect(Modal.open()).toBeInstanceOf(Promise);
  });

  test('modal.open returned promise should resolve with modal instance', () => {
    return expect(Modal.open()).resolves.toBeInstanceOf(React.Component);
  });

  test('modal.open should mount jsx supplied', () => {
    return Modal.open()
      .then(() => expect(document.querySelector('.hi')).toBeTruthy());
  });

  test('modal.open should publish modal.open message', () => {
    const sub = jest.fn();

    Modal.pubsub.sub('modal.open', sub);

    return Modal.open()
      .then(() => expect(sub.mock.calls.length).toBe(1));
  });
});
