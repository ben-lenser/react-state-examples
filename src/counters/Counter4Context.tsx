import React, { Dispatch, SetStateAction } from 'react';

type CountContextType = { count: number; setCount: Dispatch<SetStateAction<number>> };

const CountContext = React.createContext<CountContextType>({ count: 0, setCount: () => {} });

function Counter() {
  const context = React.useContext(CountContext);
  const { count, setCount } = context;
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}

function CountDisplay() {
  const { count } = React.useContext(CountContext);
  return <div>The current counter count is {count}</div>;
}

export function Counter4() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <CountDisplay />
        <Counter />
      </CountContext.Provider>
    </div>
  );
}
