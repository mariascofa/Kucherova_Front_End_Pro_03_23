let left_arrow = document.querySelector("#left_button");
let right_arrow = document.querySelector("#right_button");
let image_base = document.querySelector("#base_image");

console.log(image_base);

let images_numbers = [
  "images/cars_1.jpg",
  "images/cars_2.jpg",
  "images/cars_3.jpg",
  "images/cars_4.jpg",
];

let index_image = 0;
right_arrow.addEventListener("click", function () {
  index_image += 1;
  if (index_image < images_numbers.length) {
    image_base.src = images_numbers[index_image];
  }
  if (index_image > 0){
    left_arrow.style.display = "flex";
  }
  if (index_image === images_numbers.length-1) {
    right_arrow.style.display = "none";
}});


left_arrow.addEventListener("click", function () {
  index_image -= 1;
  if (index_image >= 0) {
    image_base.src = images_numbers[index_image];
  }
  if (index_image !== images_numbers.length-1){
    right_arrow.style.display = "flex";
  }
  if (index_image === 0) {
    left_arrow.style.display = "none";
}});