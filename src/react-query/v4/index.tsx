import React from 'react';
import { Button } from 'is24-corecss';
import { useGetCounter, useSetCounter } from './api/hooks';

function CountDisplay() {
  const { data: counter } = useGetCounter();
  return <div>The current counter count is {counter?.counter}</div>;
}

export const Counter: React.FC = () => {
  const { data: counter, isLoading: isLoadingCounter, isError, error } = useGetCounter();
  const { mutate: setCounter, isLoading: isSettingCounter } = useSetCounter();

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }
  if (isLoadingCounter) {
    return <div>Loading</div>;
  }
  const increment = () => setCounter({ counter: (counter?.counter ?? 0) + 1 });

  return (
    <>
      <Button onClick={increment}>{counter?.counter}</Button>
      {isSettingCounter && <div>Saving ....</div>}
    </>
  );
};

export const CounterApp4: React.FC = () => {
  return (
    <div>
      <CountDisplay />
      <Counter />
    </div>
  );
};
