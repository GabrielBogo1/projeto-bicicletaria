document.getElementById('open-btn').addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar'); 
});

let products = JSON.parse(localStorage.getItem("products")) || [];
let sales = JSON.parse(localStorage.getItem("sales")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];



let categoryCount = sales.reduce((count, sale) => {
  if (!count[sale.category]) {
    count[sale.category] = 0;
  }
  count[sale.category]++;
  return count;
}, {});

let categories = Object.keys(categoryCount);
let counts = Object.values(categoryCount);
let category = document.getElementById ('category');
category.textContent = counts.length;


let paymentMethodCount = sales.reduce((count, sale) => {
  if (!count[sale.payment]) {
    count[sale.payment] = 0;
  }
  count[sale.payment]++;
  return count;
}, {});

let paymentMethods = Object.keys(paymentMethodCount);
let paymentCounts = Object.values(paymentMethodCount);


let productCount = products.reduce((count) => {
  if (!count[products]) {
    count[products] = 0;
  }
  count[products]++;
  return count;
}, {});

let productCounts = Object.values(productCount);
let product = document.getElementById ('products');
product.textContent = productCounts;


let orderCount = orders.reduce((count) => {
  if (!count[orders]) {
    count[orders] = 0;
  }
  count[orders]++;
  return count;
}, {});

let ordersCounts = Object.values(orderCount);
let order = document.getElementById ('orders');
order.textContent = ordersCounts;


const barChartOptions = {
    series: [
      {
        data: counts,
        name: 'Products',
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: 'black',
      },
      show: true,
      position: 'top',
    },
    xaxis: {
      categories: categories,
      title: {
        style: {
          color: 'black',
        },
      },
      axisBorder: {
        show: true,
        color: 'black',
      },
    
      labels: {
        style: {
          colors: 'black',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: 'black',
        },
      },
      axisBorder: {
        color: 'black',
        show: true,
      },
      axisTicks: {
        color: 'black',
        show: true,
      },
      labels: {
        style: {
          colors: 'black',
        },
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );


  var options = {
    series: paymentCounts,
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: paymentMethods,
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  barChart.render();


  document.addEventListener('DOMContentLoaded', function () {
    var isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn == 'false'){
      document.getElementById ('cart').style.display = 'none';
    }
});
