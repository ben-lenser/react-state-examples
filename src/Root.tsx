import React from 'react';
import { CounterApp1 } from './counters/Counter';
import { CounterApp2 } from './counters/Counter2';
import { CounterApp3Dont } from './counters/Counter3Dont';
import { CounterApp3PleaseDo } from './counters/Counter3PleaseDo';
import { Counter4 } from './counters/Counter4/Counter4';
import { Counter5 } from './counters/Counter5/Counter5';
import { Counter6 } from './counters/Counter6/Counter6';

const Root: React.FC = () => {
  return <CounterApp1 />;
  // return <CounterApp2 />;
  // return <CounterApp3Dont />;
  // return <CounterApp3PleaseDo />;
  // return <Counter4 />;
  // return <Counter5 />;
  // return <Counter6 />;
};

export default Root;
