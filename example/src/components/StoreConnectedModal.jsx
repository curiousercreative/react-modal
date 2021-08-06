import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function StoreConnectedModal () {
  const dispatch = useDispatch();
  const username = useSelector(state => state.username);

  const handleChange = React.useCallback(e => {
    dispatch({ payload: e.target.value, type: 'set_username' });
  }, [ dispatch ]);

  const handleClickClear = React.useCallback(() => {
    dispatch({ type: 'clear_username' });
  }, [ dispatch ]);

  return (
    <div className="modal__wrapper">
      <div className="modal__title">Hi {username}</div>
      <div className="modal__body">
        <input onChange={handleChange} value={username} />
        <button onClick={handleClickClear}>Clear username</button>
      </div>
    </div>
  )
}
