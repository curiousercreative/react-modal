import React from 'react';

import * as modal from './';

/**
 * @param  {object} props
 * @return {jsx} <ModalWindow />
 */
export default function ModalPortal (props) {
  // modal.open handles this for non-portals,
  // but because portal rendering is sync, this is the best place for publishing
  React.useEffect(() => {
    modal.pubsub.pub('modal.open');
  }, []);

  return modal.renderPortal(props.children, props);
}
