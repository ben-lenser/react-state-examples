import React from 'react';
import { QueryClientProvider } from 'react-query';
import { CounterApp1 } from './react-query/v1';
import { CounterApp2 } from './react-query/v2';
import { queryClient } from './react-query/v1/api';

const Root: React.FC = () => {
  return <CounterApp1 />;
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <CounterApp2 />
  //   </QueryClientProvider>
  // );
};

export default Root;
