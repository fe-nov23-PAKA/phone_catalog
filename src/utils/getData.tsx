export function getData() {
  return fetch("/api/phones.json").then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}
