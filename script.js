const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'CPU Usage',
            data: [],
            borderColor: '#00ffcc',
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

function updateData() {
    const cpu = Math.floor(Math.random()*100);
    const memory = Math.floor(Math.random()*100);
    const network = Math.floor(Math.random()*100);

    document.getElementById("cpu").innerText = cpu + "%";
    document.getElementById("memory").innerText = memory + "%";
    document.getElementById("network").innerText = network + " Mbps";

    const time = new Date().toLocaleTimeString();

    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(cpu);

    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    chart.update();
}

setInterval(updateData, 1000);
