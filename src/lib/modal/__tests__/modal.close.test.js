import React from 'react';
import Modal from './Modal';
import { setup, teardown } from './util';

beforeAll(setup);
afterEach(teardown);

describe('modal.close tests', () => {
  test('modal.close should return promise', () => {
    expect(Modal.close()).toBeInstanceOf(Promise);
  });

  test('modal.close should unmount modal', () => {
    return Modal.open()
      .then(Modal.close)
      .then(() => expect(document.querySelector('.hi')).toBeFalsy());
  });

  test('modal.close should publish modal.close message', () => {
    const sub = jest.fn();

    Modal.pubsub.sub('modal.close', sub);

    return Modal.open()
      .then(Modal.close)
      .then(() => expect(sub.mock.calls.length).toBe(1));
  });
});
