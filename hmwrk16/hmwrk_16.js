async function firstTrilogy(urls) {
  async function errorHandler() {
    const response = await fetch("https://swapi.dev/api/starships/9/");
    const data = await response.json();
    throw new Error(`${data.name} has destroyed everything!`);
  }

  async function getPlanetName(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data.name;
  }

  let requests = urls.map((numb) =>
    fetch(`https://swapi.dev/api/films/${numb}`).then((response) => {
      if (!response.ok) {
        reject(new Error("Response has failed!"));
      } else {
        return response;
      }
    })
  );

  let planetNames = [];

  return Promise.all(requests)
    .then(async (responses) => {
      for (let response of responses) {
        const data = await response.json();
        for (const planetUrl of data.planets) {
          const planetName = await getPlanetName(planetUrl);
          planetNames.push(planetName);
        }
      }
      return planetNames;
    })
    .catch((error) => errorHandler());
}

let filmsNumber = [1, 2, 3];
firstTrilogy(filmsNumber)
  .then((result) => {
    result.forEach((elem) => console.log(elem));
  })
  .catch((error) => console.error(error.message));
