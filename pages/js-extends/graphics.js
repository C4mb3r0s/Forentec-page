document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(ctx, {
        // Definiendo una gráfica de lineas
        type: 'line',
        data: {
            // Añadimos los dias de la semana
            labels: ['Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', 'Dom'],
            datasets: [
                {
                    label: 'Concluidas',
                    // añadimos los datos en orden por dia
                    data: [80, 60, 90, 200, 180, 150, 100],
                    // Color de la lines
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59,130, 246, 0.1)',
                    // Añadimos curvas en lugar de lineas
                    tension: 0.4,
                    // Sombra bajo la linea
                    fill: true,
                    // Eliminamos los puntos de la grafica para un estilado limpio
                    pointRadius: 0,
                },
                {
                    label: 'Pendientes',
                    data: [20, 30, 50, 90, 70, 40, 20],
                    borderColor: '#facc15',
                    backgroundColor: 'rgba(250, 204, 21, 0.1)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                }
            ]
        },
        options: {
            responsive: true,
            maintaintAspectRatio: false,
            plugins: {
                // estilo para la posicion de la linea
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        boxWidth: 8
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    // Controla la visibilidad de las lineas 
                    grid: {
                        color: '#e5e7eb'
                    },
                    ticks: {
                        stepSze: 50
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
    // Gráfica Doughnut
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Luminarias', 'Basura', 'Baches', 'Jardines', 'Contaminación'],
            datasets: [{
                data: [35, 20, 12, 15, 18],
                backgroundColor: ['#3b82f6', '#facc15', '#ef4444', '#8b5cf6', '#22c55e'],
                borderColor: '#fff',
                borderWidth: 3,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: false,
            maintainAscpectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        }
    });
    // Gráfica Doughnut
    const doughnutTwoCtx = document.getElementById('doughnutChartTwo').getContext('2d');
    new Chart(doughnutTwoCtx, {
        type: 'doughnut',
        data: {
            labels: ['Web', 'Celular', 'Whatsapp', 'Teléfono', 'Otro'],
            datasets: [{
                data: [60, 15, 25, 15, 25],
                backgroundColor: ['#0A1F44', '#3B82F6', '#FACC15', '#60A5FA', '#FDE047'],
                borderColor: '#fff',
                borderWidth: 3,
                hoverOffset: 8
            }]
        },
        options: {
            responsive: false,
            maintainAscpectRatio: false,
            cutout: '70%',
            plugins: {
                legend: { display: false }
            }
        }
    });
});
