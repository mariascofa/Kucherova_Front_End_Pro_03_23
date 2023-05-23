import categProdConnect from "./genre.json" assert { type: "json" };
import regions from "./regions.json" assert { type: "json" };

const categories = document.querySelectorAll("li");
const bandSection = document.querySelector("#bands");
const descriptionSection = document.querySelector("#description");
const bandsDiv = document.querySelector("#band_div");
const albumsDiv = document.querySelector("#albums_div");

// Creating an HTML for the buying form dynamically
let formHtml = `<form class="form-container" id="buy_form">
    <div class="form-group">
      <label for="full-name" >Full Name:</label>
      <input type="text" id="full-name" name="full-name" required>
    </div>

    <div class="form-group">
      <label for="payment-method">Payment Method:</label>
      <select id="payment-method" name="payment-method" required>
        <option value="" disabled selected>Select Payment Method</option>
        <option value="cash-on-delivery">Cash on Delivery</option>
        <option value="bank-card">Bank Card</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="city">Region:</label>
      <select id="city" name="city" required>
        <option value="" disabled selected>Select Region</option>`;

// Generate region options dynamically from the provided json file
Object.keys(regions).forEach((region) => {
  formHtml += `<option value="${region}">${region}</option>`;
});

formHtml += `</select>
    </div>
    
    <div class="form-group" id = "warehouse">
    </div>
      
    <div class="form-group">
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" required>
    </div>
    
    <div class="form-group">
      <label for="comment">Comment:</label>
      <textarea id="comment" name="comment"></textarea>
    </div>
    
    <div class="btn_group">
      <button type="submit" id="submit_btn">Buy</button>
      <button type="submit" id="exit_btn">Return</button>
    </div>
</form>`;

// Function to show the band section based on the selected category
function showBandSection(catId) {
  //removing old warning
  let nameInput = document.querySelector("#warning");
  nameInput.textContent = "";
  //show bands box
  bandsDiv.style.display = "inline-block";
  //hide albums box
  albumsDiv.style.display = "none";
  //remove previous bands
  bandSection.innerHTML = "";
  //get all the bands under selected category
  let categBands = Object.keys(categProdConnect[catId]);

  // Getting all the bands under the selected category as a list
  categBands.forEach((band) => {
    const bandListItem = document.createElement("li");
    bandListItem.textContent = band;

    // Event listener for clicking on a band
    bandListItem.addEventListener("click", function () {
      nameInput.textContent = "";

      // Getting the albums for the selected band
      const categBandAlbums = categProdConnect[catId][band];
      showDescriptionSection(categBandAlbums);
    });

    bandSection.appendChild(bandListItem);
  });
}

// Function to check if a name is valid
function isValidName(name) {
  const namePattern = /^[A-Za-z\s]+$/;
  return namePattern.test(name);
}

function buyForm(button, listZone, album) {
  //creating div for a future form
  let formDiv = document.createElement("div");
  formDiv.innerHTML = formHtml;

  //defining Return and Buy buttons inside of the form
  let formBuy = formDiv.querySelector("#buy_form");
  let exitBtn = formDiv.querySelector("#exit_btn");
  let submitBtn = formDiv.querySelector("#submit_btn");

  //defining city and div for the warehouse to be able to select warehouse number
  //based on the city
  let city = formDiv.querySelector("#city");
  const warehouseDiv = formDiv.querySelector("#warehouse");

  //adding warehouse input based on the previously selected city
  city.addEventListener("change", function (event) {
    let selectedCity = event.target.value;

    warehouseDiv.innerHTML = "";

    let warehouseLabel = document.createElement("label");
    warehouseLabel.textContent = "Nova Poshta Warehouse:";
    warehouseDiv.appendChild(warehouseLabel);

    let warehouseSelect = document.createElement("select");
    warehouseSelect.required = true;

    //adding warehouse options in a list based on the region
    regions[selectedCity].forEach((warehouse) => {
      let newOption = document.createElement("option");
      newOption.value = warehouse;
      newOption.textContent = warehouse;
      warehouseSelect.appendChild(newOption);
    });

    warehouseDiv.appendChild(warehouseSelect);
  });

  exitBtn.addEventListener("click", function () {
    //hide button that opens the form
    formBuy.style.display = "none";
    button.style.display = "inline-block";
  });

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let nameInput = formDiv.querySelector("#full-name");
    let nameValue = nameInput.value;
    let warning = document.querySelector("#warning");

    if (isValidName(nameValue)) {
      warning.innerHTML = ``;
      warning.innerHTML = `Album "${album}" was bought!`;
    } else {
      console.log("not valid");
      warning.innerHTML = ``;
      warning.innerHTML = `You've entered a wrong name, please check your inputs!`;
    }
  });

  listZone.append(formDiv);
}

//function to show album description
function showDescriptionSection(categBandAlbums) {
  descriptionSection.innerHTML = "";
  //show album block
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

    albumBtn.textContent = "Buy an Album";
    albumBtn.addEventListener("click", function () {
      albumBtn.style.display = "none";
      buyForm(albumBtn, albumList, album);
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
