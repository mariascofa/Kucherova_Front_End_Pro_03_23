import categProdConnect from "./genre.json" assert { type: "json" };
import regions from "./regions.json" assert { type: "json" };

const categories = document.querySelectorAll("li");
const bandSection = document.querySelector("#bands");
const descriptionSection = document.querySelector("#description");
const bandsDiv = document.querySelector("#band_div");
const albumsDiv = document.querySelector("#albums_div");
let orderId = 0;

let orderDescription = {
  albumName: "albumName",
  albumPrice: "albumPrice",
  fullName: "full-name",
  city: "city",
  warehouse: "warehouse",
  quantity: "quantity",
};

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
        <option value="" disabled selected required>Select Region</option>`;

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

function closeBuyForm(formDiv, buyButton) {
  let formBuy = formDiv.querySelector("#buy_form");

  formBuy.classList.toggle("form_container_none");
  buyButton.style.display = "inline-block";
}

function warehouseSelection(warehouseDiv, selectedCity) {
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
}

function submitOrder(formDiv, album, albumDescription, buyButton) {
  let getInputValue = (selector) => formDiv.querySelector(selector).value;
  let formBuy = formDiv.querySelector("#buy_form");
  let nameValue = getInputValue("#full-name");
  let cityValue = getInputValue("#city");
  let warehouseValue = getInputValue("#warehouse");
  let quantityValue = getInputValue("#quantity");
  let warning = document.querySelector("#warning");

  if (!formBuy.reportValidity()) {
    warning.textContent = "Please fill out all required fields.";
    return;
  }

  let orderInfo = {
    albumName: album,
    albumPrice: albumDescription["price"],
    fullName: nameValue,
    city: cityValue,
    warehouse: warehouseValue,
    quantity: quantityValue,
  };

  if (isValidName(nameValue)) {
    localStorage.setItem(orderId, JSON.stringify(orderInfo));
    orderId += 1;
    warning.innerHTML = `Album "${album}" was bought!`;
    closeBuyForm(formDiv, buyButton);
  } else {
    warning.innerHTML = `You've entered a wrong name, please check your inputs!`;
  }
}

function buyForm(listZone, album, albumDescription, albumBtn) {
  albumBtn.style.display = "none";

  //creating div for a future form
  let formDiv = document.createElement("div");
  formDiv.id = "form_div";
  formDiv.innerHTML = formHtml;

  //defining Return and Buy buttons inside of the form
  let formBuy = formDiv.querySelector("#buy_form");
  let exitBtn = formDiv.querySelector("#exit_btn");
  let submitBtn = formDiv.querySelector("#submit_btn");

  exitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    formBuy.classList.toggle("form_container_none");
    albumBtn.style.display = "inline-block";
  });

  //defining city and div for the warehouse to be able to select warehouse number
  //based on the city
  let city = formDiv.querySelector("#city");

  //adding warehouse input based on the previously selected city
  city.addEventListener("change", function (event) {
    const warehouseDiv = formDiv.querySelector("#warehouse");
    let selectedCity = event.target.value;
    warehouseSelection(warehouseDiv, selectedCity);
  });

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    submitOrder(formDiv, album, albumDescription, albumBtn);
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
    albumBtn.id = "buy_album_button";
    albumBtn.textContent = "Buy an Album";

    albumBtn.addEventListener("click", function () {
      buyForm(albumList, album, categBandAlbums[album], albumBtn);
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

function htmlPageCart() {
  window.location.href = "cart.html";
}

let cartIcon = document.querySelector("#cart");
cartIcon.addEventListener("click", htmlPageCart);
