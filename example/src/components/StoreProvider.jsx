import React from 'react';
import { Provider } from 'react-redux';

import _store from '../store/index.js';

export default function StoreProvider ({ children, store = _store }) {
  return <Provider store={store}>{children}</Provider>
}
