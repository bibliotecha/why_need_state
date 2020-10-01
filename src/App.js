import React from 'react';
import { useState } from 'react';

function App() {
  const countNotState = 0;
  const [count, setCount] = useState(0);
  console.log('componentが構築されました');
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count up</button>
      <div>{count}</div>
      <button onClick={() => countNotState + 1}>count (not state) up</button>
      <div>{countNotState}</div>
    </div>
  );
}

export default App;
