export function getData() {
  return fetch("http://localhost:5173/api/phones.json").then((res) => {
    if (!res.ok) {
      throw new Error();
    }

    return res.json();
  });
}
