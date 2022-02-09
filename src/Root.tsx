import React from 'react';
import { QueryClientProvider } from 'react-query';
import { CounterApp2 } from './react-query/v1';
import { queryClient } from './react-query/v1/api';

const Root: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CounterApp2 />
    </QueryClientProvider>
  );
  // return <CounterApp2 />;
  // return <CounterApp3Dont />;
  // return <CounterApp3PleaseDo />;
  // return <Counter4 />;
  // return <Counter5 />;
  // return <Counter6 />;
};

export default Root;
