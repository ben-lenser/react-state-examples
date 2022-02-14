import React from 'react';
import { Button } from 'is24-corecss';

type CountDisplayProps = { count: number };
const CountDisplay = ({ count }: CountDisplayProps) => {
  return <div>The current counter count is {count}</div>;
};

type CounterProps = { count: number; onIncrementClick: () => void };
const Counter = ({ count, onIncrementClick }: CounterProps) => {
  return <Button onClick={onIncrementClick}>{count}</Button>;
};

export const CounterApp2: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <CountDisplay count={count} />
      <Counter count={count} onIncrementClick={increment} />
    </div>
  );
};
