import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchCounter, setCounter } from './client';
import { ServerStateKeysEnum } from './index';

export type Counter = { counter: number };

export function useGetCounter() {
  return useQuery<Counter, Error>(ServerStateKeysEnum.Counters, () => fetchCounter());
}

export function useSetCounter() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, Counter>(
    ({ counter }) => {
      return setCounter(counter);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(ServerStateKeysEnum.Counters);
      },
    }
  );
}
