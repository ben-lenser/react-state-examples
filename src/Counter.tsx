import React, { useState } from 'react';
import { Button } from 'is24-corecss';

export const CounterApp1: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);

  return <Button onClick={increment}>{count}</Button>;
};
