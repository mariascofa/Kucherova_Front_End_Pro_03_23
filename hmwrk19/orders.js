function htmlRecvordsPage() {
  window.location.href = "records.html";
}

longNames = {
  albumName: "Album Name",
  albumPrice: "Price",
  fullName: "Customer's name",
  city: "City",
  quantity: "Quantity",
};

let musicIcon = document.querySelector("#back_to_music");
let ordersList = document.querySelector("#orders_list");
musicIcon.addEventListener("click", htmlRecvordsPage);

if (localStorage.length > 0) {
  ordersList.innerHTML = "";
  Object.keys(localStorage).forEach((key) => {
    const orderLi = document.createElement("li");
    let orderValues = JSON.parse(localStorage.getItem(key));
    let listItems = [];

    Object.keys(orderValues).forEach((descriptionKey) => {
      let listItem = document.createElement("li");
      listItem.id = `${key}`;
      listItem.textContent = `${longNames[descriptionKey]}: ${orderValues[descriptionKey]}`;
      orderLi.appendChild(listItem);
      listItems.push(listItem);
    });

    const deleteOrderBtn = document.createElement("button");
    deleteOrderBtn.id = "deleteOrderBtn";
    deleteOrderBtn.textContent = "Delete Order";
    deleteOrderBtn.setAttribute("data-key", key);

    deleteOrderBtn.addEventListener("click", function () {
      const dataKey = this.getAttribute("data-key"); // Get the data key
      localStorage.removeItem(dataKey);
      listItems.forEach((item) => {
        if (item.id === dataKey) {
          item.remove();
        }
      });
      deleteOrderBtn.remove();
      if (localStorage.length === 0) {
        ordersList.innerHTML = "No Orders";
      }
    });

    ordersList.appendChild(orderLi);
    ordersList.appendChild(deleteOrderBtn);
  });
} else {
  ordersList.innerHTML = "No Orders";
}
