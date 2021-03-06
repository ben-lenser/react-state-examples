import React, { ReactElement } from 'react';
import { Button } from 'is24-corecss';

type CountDisplayProps = { count: number };
const CountDisplay = ({ count }: CountDisplayProps) => {
  return <div>The current counter count is {count}</div>;
};

type CounterProps = { count: number; onIncrementClick: () => void };
const Counter = ({ count, onIncrementClick }: CounterProps) => {
  return <Button onClick={onIncrementClick}>{count}</Button>;
};

type CounterLayoutParams = { top: ReactElement; bottom: ReactElement };
const CounterLayout = ({ top, bottom }: CounterLayoutParams) => {
  return (
    <div>
      <div className='some styles'>{top}</div>
      <div>{bottom}</div>
    </div>
  );
};

export const CounterApp3PleaseDo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return (
    <div>
      <CounterLayout
        top={<Counter count={count} onIncrementClick={increment} />}
        bottom={<CountDisplay count={count} />}
      />
    </div>
  );
};
