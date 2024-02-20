export function getData(option: string) {
  return fetch(`/api/${option}.json`).then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}
