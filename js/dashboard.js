// Traffic Updates Chart
const trafficCtx = document.getElementById("trafficChart").getContext("2d");
new Chart(trafficCtx, {
  type: "bar",
  data: {
    labels: ["Main Street", "Highway 8", "Downtown", "Elm Avenue"],
    datasets: [
      {
        label: "Traffic Level",
        data: [60, 20, 90, 40],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc", "#f6c23e"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  },
});

// Weather Conditions Chart
const weatherCtx = document.getElementById("weatherChart").getContext("2d");
new Chart(weatherCtx, {
  type: "line",
  data: {
    labels: ["6AM", "9AM", "12PM", "3PM", "6PM"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 25, 28, 27, 23],
        borderColor: "#ff6b6b",
        fill: false,
        tension: 0.4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  },
});

// Air Quality Index Chart
const aqiCtx = document.getElementById("aqiChart").getContext("2d");
new Chart(aqiCtx, {
  type: "pie",
  data: {
    labels: ["Good", "Moderate", "Unhealthy", "Hazardous"],
    datasets: [
      {
        data: [40, 35, 15, 10],
        backgroundColor: ["#2ecc71", "#f1c40f", "#e74c3c", "#9b59b6"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  },
});

// Energy Consumption Chart
const energyCtx = document.getElementById("energyChart").getContext("2d");
new Chart(energyCtx, {
  type: "doughnut",
  data: {
    labels: ["Residential", "Commercial", "Industrial", "Renewable"],
    datasets: [
      {
        data: [1200, 5500, 9800, 3500],
        backgroundColor: ["#3498db", "#9b59b6", "#e74c3c", "#2ecc71"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  },
});
