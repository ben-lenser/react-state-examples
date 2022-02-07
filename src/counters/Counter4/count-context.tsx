import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

type CountContextType = { count: number; setCount: Dispatch<SetStateAction<number>> };

const CountContext = React.createContext<CountContextType | undefined>(undefined);

function CountProvider(props: Record<string, unknown>) {
  const [count, setCount] = React.useState(0);
  const value = React.useMemo(() => ({ count, setCount }), [count]);
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}
export { CountProvider, useCount };
