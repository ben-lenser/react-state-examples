import { QueryClient } from 'react-query';

export enum ServerStateKeysEnum {
  Counters = 'counter',
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
