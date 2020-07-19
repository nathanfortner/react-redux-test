import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';
import {isLoggedIn} from './actions';


function App() {
  const counterReducer = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello {counterReducer}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(isLoggedIn())}>Log In</button>

      {isLogged ? <h3>things that I should not see if not logged in</h3> : <h3>nothing to see here</h3>}
    </div>
  );
}

export default App;
