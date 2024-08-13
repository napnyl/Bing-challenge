export const getResults = async (query) => {
    const response = await fetch(
      `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "xxxxxx"
          }
        }
      );
    const data = await response.json();
    return data?.webPages?.value
}
