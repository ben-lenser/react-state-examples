import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Counter, fetchCounterAsync, setCounterAsync } from './client';
import { ServerStateKeysEnum } from './index';

export function useGetCounter() {
  return useQuery<Counter, Error>(ServerStateKeysEnum.Counters, () => fetchCounterAsync());
}

export function useSetCounter() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, Counter>(
    ({ counter }) => {
      return setCounterAsync(counter);
    },
    {
      onSuccess: async (data, variables) => {
        queryClient.setQueriesData(ServerStateKeysEnum.Counters, () => variables);
        // Or just reload the counter query
        // await queryClient.invalidateQueries(QUERY_COUNTER_KEY);
      },
    }
  );
}
