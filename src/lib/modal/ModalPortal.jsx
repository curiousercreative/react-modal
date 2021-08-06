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

    return () => {
      setTimeout(() => {
        modal.pubsub.pub('modal.close');
      }, 0);
    };
  }, []);

  return modal.renderPortal(props.children, props);
}
