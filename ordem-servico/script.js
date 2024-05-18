document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

const openModal = () => {
    document.querySelector('.modal').style.display = 'block';
    document.getElementById('backgroundModal').style.display = 'block'; 
};


const closeModal = () => {
    document.querySelector('.modal').style.display = 'none';
    document.getElementById('backgroundModal').style.display = 'none'; 
};

const updateTable = () => {
    const tableBody = document.querySelector('#orderTable tbody');
    const staticRow = tableBody.querySelector('tr');
    tableBody.innerHTML = '';
    tableBody.appendChild(staticRow);

    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.forEach((order, index) => {
        const newRow = tableBody.insertRow();
        const cells = Object.values(order);
        cells.forEach((value) => {
            const newCell = newRow.insertCell();
            newCell.textContent = value;
        });

        const actionsCell = newRow.insertCell();

        const editIcon = document.createElement('i');
        editIcon.className = 'fa-solid fa-pen-to-square';
        editIcon.addEventListener('click', () => editOrder(index)); 
        actionsCell.appendChild(editIcon);

        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash';
        deleteIcon.addEventListener('click', () => deleteOrder(index)); 
        actionsCell.appendChild(deleteIcon);
    });
};


const saveOrder = () => {
    const service = document.getElementById('service').value;
    const description = document.getElementById ('description').value
    const initialDate = document.getElementById('initialDate').value;
    const finalDate = document.getElementById('finalDate').value;
    const clientContact = document.getElementById('clientContact').value;
    const paymentSelect = document.getElementById('paymentSelect').value;

    const newOrder = {
        service,
        description,
        initialDate,
        finalDate,
        clientContact,
        paymentSelect
    };


    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    orders.push(newOrder);

    localStorage.setItem('orders', JSON.stringify(orders));

  
    closeModal();
    updateTable();
};

const editOrder = (index) => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders[index];

    document.getElementById('service').value = order.service;
    document.getElementById('description').value = order.description;
    document.getElementById('initialDate').value = order.initialDate;
    document.getElementById('finalDate').value = order.finalDate;
    document.getElementById('clientContact').value = order.clientContact;
    document.getElementById('paymentSelect').value = order.paymentSelect;

    
    const saveButton = document.getElementById('saveBtn');
    saveButton.textContent = 'Salvar Edição';

   
    saveButton.addEventListener('click', () => {
        order.service = document.getElementById('service').value;
        order.description = document.getElementById('description').value;
        order.initialDate = document.getElementById('initialDate').value;
        order.finalDate = document.getElementById('finalDate').value;
        order.clientContact = document.getElementById('clientContact').value;
        order.paymentSelect = document.getElementById('paymentSelect').value;

    
        localStorage.setItem('orders', JSON.stringify(orders));

        closeModal();
        updateTable();
    });


    openModal();
};


const deleteOrder = (index) => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    updateTable();
};

window.addEventListener('load', updateTable);
document.getElementById('addSo').addEventListener('click', openModal);
document.getElementById('saveBtn').addEventListener('click', saveOrder); 
document.getElementById('cancelBtn').addEventListener('click', closeModal); 


document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn == 'false'){
      document.getElementById ('cart').style.display = 'none';
    }
});
