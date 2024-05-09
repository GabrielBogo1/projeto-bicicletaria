document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

let sales = JSON.parse(localStorage.getItem("sales")) || [];

let salesTable = document.getElementById("salesTable");


sales.forEach(function (sale) {
  let tr = document.createElement("tr");

  let tdProduct = document.createElement("td");
  tdProduct.textContent = sale.product;
  tr.appendChild(tdProduct);

  let tdCategory = document.createElement("td");
  tdCategory.textContent = sale.category;
  tr.appendChild(tdCategory);

  let tdPayment = document.createElement("td");
  tdPayment.textContent = sale.payment;
  tr.appendChild(tdPayment);

  let tdDate = document.createElement("td");
  tdDate.textContent = new Date(sale.date).toLocaleDateString();
  tr.appendChild(tdDate);

  salesTable.appendChild(tr);


  let tdVendedor = document.createElement("td");
  tdVendedor.textContent = 'Cláudiao'
  tr.appendChild(tdVendedor);

  salesTable.appendChild(tr);
});

document.addEventListener('DOMContentLoaded', function () {
  var isLoggedIn = localStorage.getItem('loggedIn');
  if (isLoggedIn == 'false'){
    document.getElementById ('cart').style.display = 'none';
  }
});







