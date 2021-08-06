import React from 'react';
import * as modal from '@curiouser/react-modal';

import StoreConnectedModal from './StoreConnectedModal';
import StoreProvider from './StoreProvider';

export default function StoreConnectedModalDefault () {
  const handleClick = React.useCallback(() => {
    modal.open(
      <StoreProvider>
        <StoreConnectedModal />
      </StoreProvider>
    );
  }, []);

  return (
    <button onClick={handleClick} type="button">
      Show store connected modal
    </button>
  );
}
