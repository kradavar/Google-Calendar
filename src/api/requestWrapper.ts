export const makeRequest = (url: string, method: string, body?: any) => {
  const request = new Request(url, {
    method,
    body,
    credentials: "include",
    headers: new Headers({ "Content-Type": "application/json" })
  });
  return fetch(request)
    .then(response => response.ok && response.json())
    .catch(error =>
      // global server error
      Promise.reject(error)
    );
};
