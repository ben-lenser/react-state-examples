export type Counter = { counter: number };

export async function setCounterAsync(counter: number) {
  await fetch(`/counter`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ counter }),
  });
}

export async function fetchCounterAsync() {
  const res = await fetch(`/counter`);
  return (await res.json()) as Counter;
}
