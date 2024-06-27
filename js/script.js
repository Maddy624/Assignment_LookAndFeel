// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Sample data (imagine this is fetched from a backend or generated dynamically)
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Page Views',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [1000, 1200, 900, 1500, 1800, 1300], // Sample page views data
    }]
  };

  // Configuration for the chart
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Monthly Page Views'
        }
      }
    },
  };

  // Create the chart
  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
});
