import React, { useState } from 'react';
import { Button } from 'is24-corecss';
import { useGetCounter, useSetCounter } from './api/hooks';

export const CounterApp2: React.FC = () => {
  const { data: counter, isLoading: isLoadingCounter, isFetching: isFetchingCounter, isError, error } = useGetCounter();
  const { mutate: setCounter, isLoading: isSettingCounter } = useSetCounter();

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }
  console.log(isLoadingCounter);
  if (isLoadingCounter) {
    return <div>Loading</div>;
  }
  const increment = () => setCounter({ counter: (counter?.counter ?? 0) + 1 });

  return (
    <>
      <Button onClick={increment}>{counter?.counter}</Button>
      {isSettingCounter && <div>Saving ....</div>}
      {isFetchingCounter && <div>Fetching ....</div>}
    </>
  );
};
