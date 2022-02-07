import * as React from 'react';
import { CountProvider, useCount } from './count-context';

function Counter() {
  const { count, increment } = useCount();
  return <button onClick={increment}>{count}</button>;
}

function CountDisplay() {
  const { count } = useCount();
  return <div>The current counter count is {count}</div>;
}

export function Counter5() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}
