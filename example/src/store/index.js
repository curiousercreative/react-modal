import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    username (state = '', { payload, type }) {
      switch (type) {
      case 'set_username':
        return payload;
      case 'clear_username':
        return '';
      default:
        return state;
      }
    },
  },
});
