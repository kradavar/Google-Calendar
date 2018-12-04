export const makeRequest = (request: any) =>
  fetch(request)
    .then(response =>
      response.ok ? response.json() : Promise.reject(response.json())
    )
    .catch(error => error);
