function heroesIterration(adress) {
  let arrayToFill = [];

  function pageIterration(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        arrayToFill.push(
          ...data.results
            .map(({ name, mass, height, gender, films }) => ({
              name,
              mass,
              height,
              gender,
              films,
            }))
        );

        if (data.next !== null) {
          return pageIterration(data.next);
        } else {
          return arrayToFill;
        }
      })
      .catch((error) => console.error(error));
  }

  return pageIterration(adress);
}

heroesIterration("https://swapi.dev/api/people/").then((results) =>
  console.log(results.filter((elem) => elem.films.length > 3))
);
