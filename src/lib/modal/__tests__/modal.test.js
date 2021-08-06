import React from 'react';
import Modal from './Modal';
import { setup, teardown } from './util';

beforeAll(setup);
afterEach(teardown);

describe('.modal-container DOM element tests', () => {
  test('only one modal container should exist before modal opens', () => {
    expect(document.querySelectorAll('.modal-container').length).toEqual(1);
  });

  test('only one modal container should exist after modal closes', () => {
    return Modal.open()
      .then(Modal.close)
      .then(() => {
        expect(document.querySelectorAll('.modal-container').length).toEqual(1);
      });
  });
});

// modal dismissable prop
  // modal close button works
  // modal esc key works

// multiple modal open and closes
