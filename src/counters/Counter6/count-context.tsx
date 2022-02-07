import * as React from 'react';
import { Dispatch } from 'react';

const CountContext = React.createContext<CountContextType | undefined>(undefined);

type CountContextType = { count: number; dispatch: Dispatch<CountAction> };
type CountAction = { type: 'INCREMENT' };

function countReducer(count: number, action: CountAction) {
  switch (action.type) {
    case 'INCREMENT': {
      return count + 1;
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function CountProvider(props: Record<string, unknown>) {
  const [count, dispatch] = React.useReducer(countReducer, 0);
  const value = React.useMemo(() => ({ count, dispatch }), [count]);
  return <CountContext.Provider value={value} {...props} />;
}

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const { count, dispatch } = context;
  const increment = () => dispatch({ type: 'INCREMENT' });
  return {
    count,
    dispatch,
    increment,
  };
}

export { CountProvider, useCount };
