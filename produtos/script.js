document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

let products = JSON.parse(localStorage.getItem("products")) || [];
let productList = document.getElementById("productList");

products.forEach(function (product, index) {
 
  let div = document.createElement("div");
  div.className = "card";

  let img = document.createElement('img');
  img.src = product.image;
  img.width = 100;
  div.appendChild(img);

  let description = document.createElement('p');
  description.textContent = product.description;
  div.appendChild(description);

  let price = document.createElement('span');
  price.textContent = 'R$' +  product.price;
  div.appendChild(price);

  let button = document.createElement('button');
  button.className = 'cartButton'
  button.textContent = "+ Carrinho";
  button.onclick = function() {
    alert ('Produto adicionado ao carrinho!');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(index);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  div.appendChild(button);

  productList.appendChild(div);
});

document.addEventListener('DOMContentLoaded', function () {
  var isLoggedIn = localStorage.getItem('loggedIn');
  if (isLoggedIn === 'true') {
      document.getElementById('addBtn').style.display = 'none';
      document.getElementById ('order').style.display = 'none';
      document.getElementById ('sales').style.display = 'none';
      document.getElementById ('dashboard').style.display = 'none';
      document.getElementById ('addProduct').style.display = 'none';
  }

  if (isLoggedIn == 'false'){
    let cartButtons = document.getElementsByClassName('cartButton');
    for (let i = 0; i < cartButtons.length; i++) {
      cartButtons[i].style.display = 'none';
    }
    document.getElementById ('cart').style.display = 'none';
  }
});
