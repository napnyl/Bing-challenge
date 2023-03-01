export const getResults = async (query) => {
    const response = await fetch(
      `https://api.bing.microsoft.com/v7.0/search?q=${query}`,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "5255e6423b7e4a588c98f60a8093f25f"
          }
        }
      );
    const data = await response.json();
    return data?.webPages?.value
}