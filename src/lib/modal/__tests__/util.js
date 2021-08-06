import { unmountComponentAtNode } from 'react-dom';

export function setup () {
  // create the container for modal to mount to
  const modalContainerEl = document.createElement('div');
  modalContainerEl.setAttribute('class', 'modal-container');
  document.body.appendChild(modalContainerEl);
}

export function teardown () {
  return unmountComponentAtNode(document.querySelector('.modal-container'));
}
