import React from 'react';
import { QueryClientProvider } from 'react-query';
import { CounterApp1 } from './react-query/v1';
import { CounterApp2 } from './react-query/v2';
import { queryClient } from './react-query/v2/api';
import { CounterApp3 } from './react-query/v3';
import { CounterApp4 } from './react-query/v4';

const Root: React.FC = () => {
  // return <CounterApp1 />;
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <CounterApp2 />
  //   </QueryClientProvider>
  // );
  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <CounterApp3 />
  //   </QueryClientProvider>
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <CounterApp4 />
    </QueryClientProvider>
  );
};

export default Root;
