let modalContainerEl;

export function setup () {
  // create the container for modal to mount to
  modalContainerEl = document.createElement('div');
  modalContainerEl.setAttribute('class', 'modal-container');
  document.body.appendChild(modalContainerEl);
}

export function teardown () {


}
