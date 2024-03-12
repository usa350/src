addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Get the hash parameter value from the query string
  const hashParam = url.searchParams.get('hash');
  // Construct the rewritten URL with the hash parameter
  const rewrittenURL = `https://no-banllkk-420ceaf1604f.herokuapp.com${url.pathname}?hash=${hashParam}`;
  
  // Create a new request to the rewritten URL
  const proxyRequest = new Request(rewrittenURL, request);
  
  // Fetch the response from the rewritten URL
  const response = await fetch(proxyRequest);
  
  // Return the response from the rewritten URL
  return response;
  }
