const removeQueryParameter = (url: string, parameterName: string) => {
  // Split the URL into two parts: before '?' and after '?'
  const urlParts = url.split('?');

  // If there is a query string
  if (urlParts.length >= 2) {
    // Extract the query string part
    let queryString: string = urlParts[1];

    // Split the query string into key-value pairs
    const queryParams = queryString.split('&');

    // Iterate through the key-value pairs
    for (let i = 0; i < queryParams.length; i += 1) {
      // Split the key-value pair into key and value
      const pair = queryParams[i].split('=');

      // If the key matches the parameterName, remove it from the array
      if (pair[0] === parameterName) {
        queryParams.splice(i, 1);
        i -= 1; // Decrement i as we removed an element
      }
    }

    // Reconstruct the query string
    queryString = queryParams.join('&');

    // Reconstruct the URL
    const newUrl = `${urlParts[0]}${queryString ? `?${queryString}` : ''}`;

    return newUrl;
  }

  return url;
};

export default removeQueryParameter;

/*
const removeQuery = (url: string): string => {
  const newUrl = new URL(url);
  newUrl.search = '';
  return newUrl.toString();
};
*/
