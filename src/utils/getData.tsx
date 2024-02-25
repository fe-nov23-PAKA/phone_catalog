function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export function getData(option: string) {
  return wait(1000).then(() =>
    fetch(`/api/${option}.json`).then((res) => {
      if (!res.ok) {
        throw new Error();
      }

      return res.json();
    }),
  );
}
