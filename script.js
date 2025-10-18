const chartTooltipTitleCallback = function(tooltipItems) {
    const item = tooltipItems[0];
    let label = item.chart.data.labels[item.dataIndex];
    if (Array.isArray(label)) {
        return label.join(' ');
    } else {
        return label;
    }
};

const commonChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#2E282A',
                font: {
                    family: "'Inter', sans-serif"
                }
            }
        },
        tooltip: {
            callbacks: {
                title: chartTooltipTitleCallback
            }
        }
    }
};

const palette = {
    teal: '#00A6A6',
    orange: '#E4572E',
    yellow: '#FDFD96',
    brown: '#7A4419',
    dark: '#2E282A'
};

new Chart(document.getElementById('economicSectorsChart'), {
    type: 'doughnut',
    data: {
        labels: ['Agronegócio e Indústria de Apoio', 'Serviços', 'Comércio', 'Educação e Saúde'],
        datasets: [{
            label: 'Composição Econômica',
            data: [55, 25, 15, 5],
            backgroundColor: [palette.teal, palette.orange, palette.brown, '#cccccc'],
            borderColor: '#ffffff',
            borderWidth: 4,
            hoverOffset: 10
        }]
    },
    options: { ...commonChartOptions }
});

const clientLabels = ['Agronegócio', 'Comércio Varejista', ['Instituições', 'de Ensino'], ['Eventos', '(Tecnoshow, etc)']];
new Chart(document.getElementById('clientDemandChart'), {
    type: 'bar',
    data: {
        labels: clientLabels,
        datasets: [{
            label: 'Demanda de Confecção (Uniformes, Bonés)',
            data: [85, 50, 60, 90],
            backgroundColor: palette.teal,
            stack: 'Stack 0',
        }, {
            label: 'Demanda Gráfica (Banners, Folders)',
            data: [70, 80, 75, 95],
            backgroundColor: palette.orange,
            stack: 'Stack 0',
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            x: {
                stacked: true,
                ticks: { color: palette.dark }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                title: { display: true, text: 'Nível de Demanda (0-100)', color: palette.dark },
                ticks: { color: palette.dark }
            }
        },
        plugins: { ...commonChartOptions.plugins, legend: { position: 'top' } }
    }
});

new Chart(document.getElementById('competitorRadarChart'), {
    type: 'radar',
    data: {
        labels: ['Preço', 'Qualidade de Impressão', 'Qualidade de Tecidos', 'Atendimento', 'Prazo de Entrega', 'Presença Online'],
        datasets: [{
            label: 'Gráfica Rápida Alfa',
            data: [8, 6, 5, 7, 7, 6],
            fill: true,
            backgroundColor: 'rgba(0, 166, 166, 0.2)',
            borderColor: 'rgba(0, 166, 166, 1)',
            pointBackgroundColor: 'rgba(0, 166, 166, 1)',
            pointBorderColor: '#fff',
        }, {
            label: 'Uniformes & Cia',
            data: [6, 7, 8, 8, 6, 4],
            fill: true,
            backgroundColor: 'rgba(228, 87, 46, 0.2)',
            borderColor: 'rgba(228, 87, 46, 1)',
            pointBackgroundColor: 'rgba(228, 87, 46, 1)',
            pointBorderColor: '#fff',
        }]
    },
    options: {
        ...commonChartOptions,
        scales: {
            r: {
                angleLines: { color: '#dddddd' },
                grid: { color: '#dddddd' },
                pointLabels: { font: { size: 12 }, color: palette.dark },
                ticks: { backdropColor: '#f0f4f8', color: palette.dark },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: { ...commonChartOptions.plugins, legend: { position: 'top' } }
    }
});