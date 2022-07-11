//store the products array in localstorage as "data"

function data() {
  event.preventDefault;
  let brand = document.getElementById("product_brand").value;
  let name = document.getElementById("product_name").value;
  let price = document.getElementById("product_price").value;

  let image = document.getElementById("product_image").value;

  var std_arr = new Array();
  std_arr = JSON.parse(localStorage.getItem("data")) || [];
  std_arr.push({
    brand: brand,
    name: name,
    price: price,
    image: image,
  });

  localStorage.setItem("data", JSON.stringify(std_arr));
  console.log(std_arr);
}
function productShow() {
  window.href = "/inventory.html";
}
