document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});


function addProduct (event){
    let category = document.getElementById('category').value;
    let description = document.getElementById('description').value;
    let manufacturer = document.getElementById('manufacturer').value;
    let sellprice = document.getElementById('sellprice').value;
    let price = document.getElementById('price').value;
    let productimage = document.getElementById('productimage').files[0];

    if (!category || !description || !manufacturer || !sellprice || !price || !productimage) {
      event.preventDefault();
      alert('Campos obrigatórios não preenchidos'); 
  }else {
    alert ('Produto cadastrado com sucesso!')
  
    let reader = new FileReader();
      reader.onloadend = function() {
      let product = {category, description, manufacturer, sellprice, price, image: reader.result};
    
      let products = JSON.parse(localStorage.getItem('products')) || [];
      products.push(product);
    
      localStorage.setItem('products', JSON.stringify(products));
    
      }
      reader.readAsDataURL(productimage);
      
      console.log (products);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn == 'false'){
      document.getElementById ('cart').style.display = 'none';
    }
});