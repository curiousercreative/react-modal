import React from 'react';

import * as modal from '@curiouser/react-modal';

import SimpleModal from './SimpleModal';

export default function SimpleModalNotDismissable () {
  const handleClick = React.useCallback(() => {
    modal.open(<SimpleModal />, { dismissable: false });
  }, []);

  return (
    <button onClick={handleClick} type="button">
      Show un-dismissable modal
    </button>
  );
}
