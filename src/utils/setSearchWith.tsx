export type SearchParams = {
  [key: string]: string | null;
};

function getSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
): string {
  const newParams = new URLSearchParams(currentParams.toString());

  Object.entries(paramsToUpdate).forEach(([key, value]) => {
    if (value === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
  });

  return newParams.toString();
}

export function setSearchWith(
  currentParams: URLSearchParams,
  paramsToUpdate: SearchParams,
  setNewParams: (params: string) => void,
) {
  const newParams = getSearchWith(currentParams, paramsToUpdate);

  setNewParams(newParams);
}
