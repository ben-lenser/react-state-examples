import React from 'react';
import { Button } from 'is24-corecss';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Counter, fetchCounterAsync, setCounterAsync } from './api/client';

const QUERY_COUNTER_KEY = 'counters';
export const CounterApp2: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: counter, isLoading: isLoadingCounter, isError, error } = useQuery<Counter, Error>(
    QUERY_COUNTER_KEY,
    () => fetchCounterAsync()
  );
  const { mutate: setCounter, isLoading: isSettingCounter } = useMutation<void, Error, Counter>(
    ({ counter }) => setCounterAsync(counter),
    {
      onSuccess: async (data, variables, context) => {
        queryClient.setQueriesData(QUERY_COUNTER_KEY, () => variables);
        // Or just reload the counter query
        // await queryClient.invalidateQueries(QUERY_COUNTER_KEY);
      },
    }
  );
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
