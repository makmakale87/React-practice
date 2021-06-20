import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadData} from './store/actions';

const App = () => {
  const data = useSelector(state => state.data)
  const dispatch = useDispatch();
  const onClick = () => dispatch(loadData());

  return (
    <div>
      <button onClick={onClick}>Load data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>No data found. Please press "Load data"</div>}
    </div>
  );
};

export default App;
