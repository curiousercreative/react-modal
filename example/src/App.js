import React from 'react';

import SimpleModalDefault from './components/SimpleModalDefault';
import SimpleModalNotCentered from './components/SimpleModalNotCentered';
import SimpleModalNotDismissable from './components/SimpleModalNotDismissable';
import SimpleModalPortal from './components/SimpleModalPortal';
import StoreConnectedModalDefault from './components/StoreConnectedModalDefault';

import '@curiouser/react-modal/dist/index.css';

export default function App () {
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
