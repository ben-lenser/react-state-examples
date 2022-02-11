import React from 'react';
import { Button } from 'is24-corecss';
import { useFetching } from './api/hooks';
import { fetchCounterAsync, setCounterAsync } from './api/client';

export const CounterApp1: React.FC = () => {
  const { data: counter, isLoading: isLoadingCounter, error, setData: setCounter } = useFetching(() =>
    fetchCounterAsync()
  );

  if (error) {
    return <span>Error: {error?.message}</span>;
  }
  if (isLoadingCounter) {
    return <div>Loading</div>;
  }

  const increment = () => {
    const incrementedCounter = (counter?.counter ?? 0) + 1;
    setCounterAsync(incrementedCounter).then(() => {
      setCounter({ counter: incrementedCounter });
    });
  };
  return <Button onClick={increment}>{counter?.counter}</Button>;
};
