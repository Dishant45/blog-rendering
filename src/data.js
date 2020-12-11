const url = "https://dishant45.github.io/BLOGDATA/data.json";

// export const data = (async () => {
//   let response = await axios.get(URL);
//   return response.data;
// })();

export const data = (async () => {
  const get = await fetch(url);
  return get.json();
})(); //iife function
