document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

let products = JSON.parse(localStorage.getItem('products')) || [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

let total = 0;
let cartList = document.getElementById('cartList');

if (cart.length > 0) {
    document.getElementById('paymentSelect').style.display = 'block';
  } else {
    document.getElementById('emptyCart').textContent = 'Sem itens no carrinho'
    document.getElementById('paymentSelect').style.display = 'none';
    document.getElementById('checkoutButton').style.display = 'none';
    document.getElementById('paymentLabel').style.display = 'none';
  }
  
  document.getElementById('paymentSelect').addEventListener('change', function() {
    let paymentSelect = this.value;
    localStorage.setItem('paymentSelect', paymentSelect);
  });
  
 
let paymentSelected = localStorage.getItem('paymentSelect');
  if (paymentSelected) {
      document.getElementById('paymentSelect').value = paymentSelected;
  }




cart.forEach(function(index) {
    let product = products[index];

    let li = document.createElement('li');
    li.className = 'cart-item';

    let img = document.createElement('img');
    img.src = product.image;
    img.width = 90;

    let productInfo = document.createElement('div');
    productInfo.className = 'product-info';

  
    let descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = product.description;

   
    let priceDiv = document.createElement('div');
    priceDiv.className = "priceDiv"
    priceDiv.textContent = 'R$' + product.sellprice;

   
    productInfo.appendChild(descriptionDiv);
    productInfo.appendChild(priceDiv);

    let removeButton = document.createElement('button');
    removeButton.className = 'fa-solid fa-trash';
    removeButton.onclick = function() {
        cart.splice(cart.indexOf(index), 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        cartList.removeChild(li);
        location.reload();
    };

    li.appendChild(img);
    li.appendChild(productInfo);
    li.appendChild(removeButton);

    cartList.appendChild(li);

    total += parseFloat(product.sellprice);
    let finalPricee = document.getElementById("total");
    finalPricee.textContent = 'Total: R$' + total;
});


document.getElementById('checkoutButton').onclick = function() {
    let sales = JSON.parse(localStorage.getItem('sales')) || [];

    cart.forEach(function(index) {
        let product = products[index];
        let sale = {
            product: product.description,
            category: product.category, 
            payment: document.getElementById('paymentSelect').value, 
            date: new Date()
        };
        sales.push(sale);
    });

    localStorage.setItem('sales', JSON.stringify(sales));
    localStorage.removeItem('cart');
    alert('Compra finalizada!');
    location.reload();  
};


document.addEventListener('DOMContentLoaded', function () {
  var isLoggedIn = localStorage.getItem('loggedIn');
  if (isLoggedIn === 'true') {
      document.getElementById ('order').style.display = 'none';
      document.getElementById ('sales').style.display = 'none';
      document.getElementById ('dashboard').style.display = 'none';
      document.getElementById ('addProduct').style.display = 'none';
  }
});