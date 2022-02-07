import React from 'react';
import { Button } from 'is24-corecss';
// Lifting state up

type CountDisplayParams = { count: number };
const CountDisplay = ({ count }: CountDisplayParams) => {
  return <div>The current counter count is {count}</div>;
};

type CounterParams = { count: number; onIncrementClick: () => void };
const Counter = ({ count, onIncrementClick }: CounterParams) => {
  return <Button onClick={onIncrementClick}>{count}</Button>;
};

type CounterLayoutParams = CounterParams;
const CounterLayout = ({ count, onIncrementClick }: CounterLayoutParams) => {
  return (
    <div>
      <div className='some styles'>
        <Counter count={count} onIncrementClick={onIncrementClick} />
      </div>
      <div>
        <CountDisplay count={count} />
      </div>
    </div>
  );
};

export const CounterApp3Dont: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <CounterLayout count={count} onIncrementClick={increment} />
    </div>
  );
};
