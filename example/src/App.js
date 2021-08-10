import * as modal from '@curiouser/react-modal';
import React from 'react';

import SimpleModalDefault from './components/SimpleModalDefault';
import SimpleModalNotCentered from './components/SimpleModalNotCentered';
import SimpleModalNotDismissable from './components/SimpleModalNotDismissable';
import SimpleModalPortal from './components/SimpleModalPortal';
import StoreConnectedModalDefault from './components/StoreConnectedModalDefault';

import '@curiouser/react-modal/dist/index.css';

export default function App () {
  // demo observability
  React.useEffect(() => {
    // listen for modal opens
    modal.pubsub.sub('modal.open', () => console.log('it is open!'));

    // listen for modal closes
    modal.pubsub.sub('modal.close', () => console.log('it is closed!'));

    return () => {
      // stop listening
      modal.pubsub.unsub('modal');
    }
  }, []);

  return (
    <ul>
      <li>
        <SimpleModalDefault />
      </li>
      <li>
        <StoreConnectedModalDefault />
      </li>
      <li>
        <SimpleModalNotDismissable />
      </li>
      <li>
        <SimpleModalNotCentered />
      </li>
      <li>
        <SimpleModalPortal />
      </li>
    </ul>
  );
}
