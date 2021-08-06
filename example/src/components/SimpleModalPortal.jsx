import React from 'react';
import { ModalPortal } from '@curiouser/react-modal';

import SimpleModal from './SimpleModal';

export default function SimpleModalDefault () {
  const [ isActive, setIsActive ] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setIsActive(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsActive(false);
  }, []);

  return <>
    <button onClick={handleClick} type="button">
      Show simple modal rendered via portal
    </button>

    {isActive && (
      <ModalPortal onClose={handleClose}>
        <SimpleModal />
      </ModalPortal>
    )}
  </>;
}
