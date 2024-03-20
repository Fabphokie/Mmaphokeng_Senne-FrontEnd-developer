document.addEventListener('DOMContentLoaded', function () {
    renderPieChart();
    renderBarGraph();
});

function renderPieChart() {
    fetch('pieChart.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('pieChart').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: data.map(item => item.year),
                    datasets: [{
                        label: 'Number of Installs',
                        data: data.map(item => item.numInstalls),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                        ],
                    }]
                },
            });
        });
}

function renderBarGraph() {
    fetch('barGraph.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('barGraph').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.map(item => item.month),
                    datasets: [{
                        label: 'Number of Installs',
                        data: data.map(item => item.numInstalls),
                        backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        });
}
