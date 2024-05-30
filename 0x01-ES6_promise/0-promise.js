// this function returns a Promise
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "API data response"};
      resolve(data);}, 2000);
    });
}

export default getResponseFromAPI;
