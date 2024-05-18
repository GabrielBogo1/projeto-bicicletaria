document.getElementById('open-btn').addEventListener('click', function(){
  document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

document.addEventListener('DOMContentLoaded', function () {
var isLoggedIn = localStorage.getItem('loggedIn');

if (isLoggedIn === 'true') {
  document.getElementById('addBtn').style.display = 'none';
  document.getElementById('productAdd').style.display = 'none';
  document.getElementById ('order').style.display = 'none';
  document.getElementById ('sales').style.display = 'none';
  document.getElementById ('dashboard').style.display = 'none';
  document.getElementById ('imgTitle').style.display = 'none';
  document.getElementById ('imgTitle').style.display = 'none';
  document.getElementById ('productimage').style.display = 'none';
  

  let title = document.getElementById ('title');
  title.innerHTML = 'Informações do produto'

  let form = document.getElementById('form');

  let button = document.getElementById('goBack');
  button.addEventListener('click', function back(event) {
    event.preventDefault();
    window.location.href = '../produtos/produtos.html';
});
  
  form.appendChild(button);

}

if (isLoggedIn == 'false'){
  document.getElementById ('cart').style.display = 'none';

  let button = document.getElementById('goBack');
  button.addEventListener('click', function back(event) {
    event.preventDefault();
    window.location.href = '../produtos/produtos.html';
  });
}


let addButton = document.getElementById('addBtn');

let urlParams = new URLSearchParams(window.location.search);
let editIndex = urlParams.get('edit');

if (editIndex !== null) {
    fillFormWithProductData(editIndex);
    addButton.onclick = function() {
        addOrUpdateProduct(event, editIndex);
    };
} else {
    addButton.onclick = function() {
        addOrUpdateProduct(event);
    };
}
});

function fillFormWithProductData(index) {
let products = JSON.parse(localStorage.getItem('products')) || [];
let product = products[index];

document.getElementById('category').value = product.category;
document.getElementById('description').value = product.description;
document.getElementById('manufacturer').value = product.manufacturer;
document.getElementById('sellprice').value = product.sellprice;
document.getElementById('price').value = product.price;
}

function addOrUpdateProduct(event, editIndex = null) {
event.preventDefault();

let category = document.getElementById('category').value;
let description = document.getElementById('description').value;
let manufacturer = document.getElementById('manufacturer').value;
let sellprice = document.getElementById('sellprice').value;
let price = document.getElementById('price').value;
let productimage = document.getElementById('productimage').files[0];

if (!category || !description || !manufacturer || !sellprice || !price || (!editIndex && !productimage)) {
  alert('Por favor, preencha todos os campos.');
  return;
}

if (editIndex !== null) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let product = products[editIndex];

    product.category = category;
    product.description = description;
    product.manufacturer = manufacturer;
    product.sellprice = sellprice;
    product.price = price;

    if (productimage) {
        let reader = new FileReader();
        reader.onloadend = function() {
            product.image = reader.result;
            localStorage.setItem('products', JSON.stringify(products));
            alert('Produto atualizado com sucesso!');
            window.location.href = "../produtos/produtos.html";
        };
        reader.readAsDataURL(productimage);
    } else {
        localStorage.setItem('products', JSON.stringify(products));
        alert('Produto atualizado com sucesso!');
        window.location.href = "../produtos/produtos.html";
    }
} else {
  
    let reader = new FileReader();
    reader.onloadend = function() {
        let product = { category, description, manufacturer, sellprice, price, image: reader.result };
        let products = JSON.parse(localStorage.getItem('products')) || [];

        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        
        alert('Produto cadastrado com sucesso!');
        window.location.href = "../produtos/produtos.html";
    };
    reader.readAsDataURL(productimage);
}

}
