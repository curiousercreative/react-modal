import React from 'react';

import * as modal from '@curiouser/react-modal';

import SimpleModal from './SimpleModal';

export default function SimpleModalDefault () {
  const handleClick = React.useCallback(() => {
    modal.open(<SimpleModal />);
  }, []);

  return (
    <button onClick={handleClick} type="button">
      Show simple modal
    </button>
  );
}
