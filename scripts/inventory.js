let std_local = new Array();
std_local = JSON.parse(localStorage.getItem("data")) || [];
displayTable(std_local);

function displayTable(std_local) {
  let prodData = document.getElementById("products_data");
  //   event.preventDefault();
  let box = document.createElement("div");
  std_local.map(function (elem) {
    let image = document.createElement("img");
    image.setAttribute("src", elem.image);
    let brand = document.createElement("p");
    brand.textContent = elem.brand;
    let name = document.createElement("p");
    name.textContent = elem.name;
    let price = document.createElement("p");
    price.textContent = elem.price;

    let Removebutton = document.createElement("button");
    Removebutton.innerText = "Delete";
    Removebutton.setAttribute("id", "remove_product");
    Removebutton.addEventListener("click", function () {
      Delete(elem.name);
    });

    box.append(image, brand, name, price, Removebutton);
    prodData.append(box);
  });
}

function Delete(id) {
  let deleted = std_local.filter(function (el) {
    return el.name != id;
  });
  std_local = deleted;
  localStorage.setItem("data", JSON.stringify(std_local));
  //   displayTable(std_local);
  location.reload();
}
