import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface FetchingResource<T, E extends Error> {
  isLoading: boolean;
  data?: T;
  error?: E;
  setData: Dispatch<SetStateAction<T | undefined>>;
}

export function useFetching<T, E extends Error>(promiseFactory: () => Promise<T>): FetchingResource<T, E> {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<E>();
  const [data, setData] = useState<T>();

  useEffect(() => {
    setLoading(true);
    promiseFactory()
      .then(setData)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { isLoading, error, data, setData };
}
export function useMutation() {}
