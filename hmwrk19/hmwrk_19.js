import categProdConnect from "./genre.json" assert { type: "json" };

const categories = document.querySelectorAll("li");
const bandSection = document.querySelector("#bands");
const descriptionSection = document.querySelector("#description");
const bandsDiv = document.querySelector("#band_div");
const albumsDiv = document.querySelector("#albums_div");

function showBandSection(catId) {
  //show bands box
  bandsDiv.style.display = "inline-block";
  //hide albums box
  albumsDiv.style.display = "none";
  //remove previous bands
  bandSection.innerHTML = "";
  //get all the bands under selected category
  let categBands = Object.keys(categProdConnect[catId]);
  categBands.forEach((band) => {
    const bandListItem = document.createElement("li");
    bandListItem.textContent = band;
    bandListItem.addEventListener("click", function () {
      const categBandAlbums = categProdConnect[catId][band];
      showDescriptionSection(categBandAlbums);
    });

    bandSection.appendChild(bandListItem);
  });
}

function showDescriptionSection(categBandAlbums) {
  descriptionSection.innerHTML = "";
  albumsDiv.style.display = "inline-block";

  Object.keys(categBandAlbums).forEach((album) => {
    const albumBlock = document.createElement("div");
    const albumList = document.createElement("li");
    albumList.textContent = album;

    const subDescription = document.createElement("ul");
    const albumItems = categBandAlbums[album];
    Object.keys(albumItems).forEach((descriptItems) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${descriptItems}: ${albumItems[descriptItems]}`;
      subDescription.appendChild(listItem);
    });

    albumList.appendChild(subDescription);
    albumBlock.appendChild(albumList);

    const btnDiv = document.createElement("div");
    const albumBtn = document.createElement("button");
    albumBtn.textContent = "Select Album";
    albumBtn.addEventListener("click", function () {
      alert(`Album "${album}" was added into the cart!`);
      albumsDiv.style.display = "none";
      bandsDiv.style.display = "none";
    });
    btnDiv.appendChild(albumBtn);
    albumBlock.appendChild(btnDiv);
    descriptionSection.appendChild(albumBlock);
  });
}

categories.forEach((singleCategory) => {
  singleCategory.addEventListener("click", function () {
    const categId = singleCategory.getAttribute("id");
    showBandSection(categId);
  });
});
