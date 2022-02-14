import React from 'react';
import { Button } from 'is24-corecss';
// Lifting state up

type CountDisplayProps = { count: number };
const CountDisplay = ({ count }: CountDisplayProps) => {
  return <div>The current counter count is {count}</div>;
};

type CounterProps = { count: number; onIncrementClick: () => void };
const Counter = ({ count, onIncrementClick }: CounterProps) => {
  return <Button onClick={onIncrementClick}>{count}</Button>;
};

type CounterLayoutParams = CounterProps;
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
