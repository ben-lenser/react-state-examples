import { Counter } from './hooks';

export async function setCounter(counter: number) {
  await fetch(`/counter`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ counter }),
  });
}

export async function fetchCounter() {
  const res = await fetch(`/counter`);
  return (await res.json()) as Counter;
}
