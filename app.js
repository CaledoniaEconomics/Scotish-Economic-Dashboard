// Scottish Economic Health Dashboard JavaScript

// economicData will be loaded from JSON on startup
let economicData = {};

// Current scenario selection for chart
let currentScenario = 'baseline';

// Color palette for charts
const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'];

// Chart instances storage
const chartInstances = {};

// Default chart options to prevent infinite expansion
const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
        intersect: false,
        mode: 'index',
    },
    onResize: function(chart, size) {
        // Prevent charts from growing beyond their container's max height
        const canvas = chart.canvas;
        const maxHeight = parseInt(canvas.getAttribute('data-max-height') || canvas.getAttribute('height') || '400');
        if (size.height > maxHeight) {
            chart.resize(size.width, maxHeight);
        }
    }
};

// Initialize dashboard once data is loaded
document.addEventListener('DOMContentLoaded', function() {
    fetch('scottish_economic_data.json')
      .then(r => r.json())
      .then(data => {
          economicData = data;
          initializeNavigation();
          initializeCharts();
          initializeScenarioControls();
          initializeExportFunctionality();
          // Activate default scenario button
          const defaultBtn = document.querySelector(`[data-scenario="${currentScenario}"]`);
          if (defaultBtn) defaultBtn.classList.add('active');
          initializeScenarioCharts();
      })
      .catch(console.error);
});

// Navigation functionality
function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show target content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });
            
            // Initialize charts for the active tab if needed
            if (targetTab === 'scenario' && !chartInstances.scenarioChart) {
                initializeScenarioCharts();
            }
        });
    });
}

// Initialize all charts
function initializeCharts() {
    initializeOverviewCharts();
    initializeHeadlineCharts();
    initializeBusinessCharts();
    initializeSectoralCharts();
    initializeLabourCharts();
    initializeTradeCharts();
}

// Overview charts
function initializeOverviewCharts() {
    // GDP Growth overview
    const gdpCtx = document.getElementById('overviewGdpChart');
    if (gdpCtx) {
        chartInstances.overviewGdp = new Chart(gdpCtx, {
            type: 'line',
            data: {
                labels: economicData.headline_indicators.gdp_growth.quarterly.map(d => d.period),
                datasets: [{
                    label: 'GDP Growth (%)',
                    data: economicData.headline_indicators.gdp_growth.quarterly.map(d => d.value),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Unemployment overview
    const unemploymentCtx = document.getElementById('overviewUnemploymentChart');
    if (unemploymentCtx) {
        chartInstances.overviewUnemployment = new Chart(unemploymentCtx, {
            type: 'line',
            data: {
                labels: economicData.headline_indicators.unemployment.quarterly.map(d => d.period),
                datasets: [{
                    label: 'Scotland',
                    data: economicData.headline_indicators.unemployment.quarterly.map(d => d.scotland),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20'
                }, {
                    label: 'UK',
                    data: economicData.headline_indicators.unemployment.quarterly.map(d => d.uk),
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20'
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Business confidence overview
    const businessCtx = document.getElementById('overviewBusinessChart');
    if (businessCtx) {
        chartInstances.overviewBusiness = new Chart(businessCtx, {
            type: 'bar',
            data: {
                labels: economicData.business_metrics.confidence_index.quarterly.map(d => d.period),
                datasets: [{
                    label: 'Scotland',
                    data: economicData.business_metrics.confidence_index.quarterly.map(d => d.scotland),
                    backgroundColor: chartColors[0],
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
}

// Headline indicator charts
function initializeHeadlineCharts() {
    let gdpPeriod = 'annual';
    
    // GDP Growth chart
    const gdpCtx = document.getElementById('gdpChart');
    if (gdpCtx) {
        function updateGdpChart(period) {
            const data = period === 'annual' ? 
                economicData.headline_indicators.gdp_growth.annual :
                economicData.headline_indicators.gdp_growth.quarterly;
            
            if (chartInstances.gdpChart) {
                chartInstances.gdpChart.destroy();
            }
            
            chartInstances.gdpChart = new Chart(gdpCtx, {
                type: 'bar',
                data: {
                    labels: data.map(d => period === 'annual' ? d.year : d.period),
                    datasets: [{
                        label: 'GDP Growth (%)',
                        data: data.map(d => d.value),
                        backgroundColor: chartColors[0],
                        borderColor: chartColors[0],
                        borderWidth: 1
                    }]
                },
                options: {
                    ...defaultChartOptions,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return `GDP Growth: ${context.parsed.y}%`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            ticks: {
                                callback: function(value) {
                                    return value + '%';
                                }
                            }
                        }
                    }
                }
            });
        }
        
        updateGdpChart(gdpPeriod);
        
        // Chart controls
        document.querySelectorAll('[data-period]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('[data-period]').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                gdpPeriod = this.dataset.period;
                updateGdpChart(gdpPeriod);
            });
        });
    }

    // Inflation chart
    const inflationCtx = document.getElementById('inflationChart');
    if (inflationCtx) {
        chartInstances.inflationChart = new Chart(inflationCtx, {
            type: 'line',
            data: {
                labels: economicData.headline_indicators.inflation.monthly.map(d => d.month),
                datasets: [{
                    label: 'CPI',
                    data: economicData.headline_indicators.inflation.monthly.map(d => d.cpi),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4
                }, {
                    label: 'RPI',
                    data: economicData.headline_indicators.inflation.monthly.map(d => d.rpi),
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    tension: 0.4
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Unemployment comparison chart
    const unemploymentCtx = document.getElementById('unemploymentChart');
    if (unemploymentCtx) {
        chartInstances.unemploymentChart = new Chart(unemploymentCtx, {
            type: 'line',
            data: {
                labels: economicData.headline_indicators.unemployment.quarterly.map(d => d.period),
                datasets: [{
                    label: 'Scotland',
                    data: economicData.headline_indicators.unemployment.quarterly.map(d => d.scotland),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4
                }, {
                    label: 'UK Average',
                    data: economicData.headline_indicators.unemployment.quarterly.map(d => d.uk),
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Employment rate chart
    const employmentCtx = document.getElementById('employmentChart');
    if (employmentCtx) {
        chartInstances.employmentChart = new Chart(employmentCtx, {
            type: 'line',
            data: {
                labels: economicData.headline_indicators.employment_rate.quarterly.map(d => d.period),
                datasets: [{
                    label: 'Scotland',
                    data: economicData.headline_indicators.employment_rate.quarterly.map(d => d.scotland),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4
                }, {
                    label: 'UK Average',
                    data: economicData.headline_indicators.employment_rate.quarterly.map(d => d.uk),
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 70,
                        max: 76,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Business metrics charts
function initializeBusinessCharts() {
    // Business confidence chart
    const businessConfidenceCtx = document.getElementById('businessConfidenceChart');
    if (businessConfidenceCtx) {
        chartInstances.businessConfidenceChart = new Chart(businessConfidenceCtx, {
            type: 'bar',
            data: {
                labels: economicData.business_metrics.confidence_index.quarterly.map(d => d.period),
                datasets: [{
                    label: 'Scotland',
                    data: economicData.business_metrics.confidence_index.quarterly.map(d => d.scotland),
                    backgroundColor: chartColors[0]
                }, {
                    label: 'UK Average',
                    data: economicData.business_metrics.confidence_index.quarterly.map(d => d.uk),
                    backgroundColor: chartColors[1]
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y > 0 ? '+' : ''}${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Business barometer chart
    const businessBarometerCtx = document.getElementById('businessBarometerChart');
    if (businessBarometerCtx) {
        chartInstances.businessBarometerChart = new Chart(businessBarometerCtx, {
            type: 'line',
            data: {
                labels: economicData.business_metrics.business_barometer.monthly.map(d => d.month),
                datasets: [{
                    label: 'Business Barometer',
                    data: economicData.business_metrics.business_barometer.monthly.map(d => d.value),
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Barometer: ${context.parsed.y}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        min: 30,
                        max: 70
                    }
                }
            }
        });
    }

    // Input costs chart
    const inputCostsCtx = document.getElementById('inputCostsChart');
    if (inputCostsCtx) {
        chartInstances.inputCostsChart = new Chart(inputCostsCtx, {
            type: 'doughnut',
            data: {
                labels: economicData.business_metrics.input_costs.sectors.map(d => d.sector),
                datasets: [{
                    data: economicData.business_metrics.input_costs.sectors.map(d => d.increase),
                    backgroundColor: chartColors.slice(0, 4),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}% reporting cost increases`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// Sectoral performance charts
function initializeSectoralCharts() {
    // Renewable energy chart
    const renewableCtx = document.getElementById('renewableEnergyChart');
    if (renewableCtx) {
        chartInstances.renewableEnergyChart = new Chart(renewableCtx, {
            type: 'pie',
            data: {
                labels: economicData.sectoral_performance.renewable_energy.breakdown.map(d => d.source),
                datasets: [{
                    data: economicData.sectoral_performance.renewable_energy.breakdown.map(d => d.percentage),
                    backgroundColor: chartColors.slice(0, 5),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Food & drink chart
    const foodDrinkCtx = document.getElementById('foodDrinkChart');
    if (foodDrinkCtx) {
        chartInstances.foodDrinkChart = new Chart(foodDrinkCtx, {
            type: 'bar',
            data: {
                labels: economicData.sectoral_performance.food_drink.breakdown.map(d => d.category),
                datasets: [{
                    label: 'Export Value (£bn)',
                    data: economicData.sectoral_performance.food_drink.breakdown.map(d => d.value_bn),
                    backgroundColor: chartColors.slice(0, 2),
                    borderWidth: 1
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: £${context.parsed.y}bn`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '£' + value + 'bn';
                            }
                        }
                    }
                }
            }
        });
    }

    // Financial services chart
    const financialCtx = document.getElementById('financialServicesChart');
    if (financialCtx) {
        chartInstances.financialServicesChart = new Chart(financialCtx, {
            type: 'doughnut',
            data: {
                labels: ['Financial Services', 'Other Sectors'],
                datasets: [{
                    data: [
                        economicData.sectoral_performance.financial_services.percentage_of_economy,
                        100 - economicData.sectoral_performance.financial_services.percentage_of_economy
                    ],
                    backgroundColor: [chartColors[0], chartColors[3]],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}% of economy`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Tourism chart
    const tourismCtx = document.getElementById('tourismChart');
    if (tourismCtx) {
        chartInstances.tourismChart = new Chart(tourismCtx, {
            type: 'bar',
            data: {
                labels: ['Enterprises', 'Employment (000s)', 'Turnover (£bn)', 'GVA (£bn)'],
                datasets: [{
                    label: 'Tourism Metrics',
                    data: [
                        economicData.sectoral_performance.tourism.enterprises / 1000,
                        economicData.sectoral_performance.tourism.employment / 1000,
                        economicData.sectoral_performance.tourism.turnover_bn,
                        economicData.sectoral_performance.tourism.gva_bn
                    ],
                    backgroundColor: chartColors[0],
                    borderWidth: 1
                }]
            },
            options: {
                ...defaultChartOptions,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const labels = ['thousand enterprises', 'thousand employed', '£bn turnover', '£bn GVA'];
                                return `${context.parsed.y} ${labels[context.dataIndex]}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Labour market charts
function initializeLabourCharts() {
    // Regional employment chart
    const regionalCtx = document.getElementById('regionalEmploymentChart');
    if (regionalCtx) {
        chartInstances.regionalEmploymentChart = new Chart(regionalCtx, {
            type: 'bar',
            data: {
                labels: economicData.labour_market.regional_employment.map(d => d.region),
                datasets: [{
                    label: 'Employment Rate (%)',
                    data: economicData.labour_market.regional_employment.map(d => d.rate),
                    backgroundColor: chartColors[0],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed.x}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: false,
                        min: 60,
                        max: 90,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Labour market overview chart
    const labourCtx = document.getElementById('labourMarketChart');
    if (labourCtx) {
        chartInstances.labourMarketChart = new Chart(labourCtx, {
            type: 'doughnut',
            data: {
                labels: ['Employed', 'Unemployed', 'Economically Inactive'],
                datasets: [{
                    data: [
                        economicData.labour_market.employment_rate,
                        economicData.headline_indicators.unemployment.current,
                        economicData.labour_market.economic_inactivity
                    ],
                    backgroundColor: chartColors.slice(0, 3),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
}

// Trade data charts
function initializeTradeCharts() {
    // Exports chart
    const exportsCtx = document.getElementById('exportsChart');
    if (exportsCtx) {
        chartInstances.exportsChart = new Chart(exportsCtx, {
            type: 'doughnut',
            data: {
                labels: ['EU', 'Rest of World'],
                datasets: [{
                    data: [
                        economicData.trade_data.exports.eu_percentage,
                        100 - economicData.trade_data.exports.eu_percentage
                    ],
                    backgroundColor: [chartColors[0], chartColors[1]],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            });
    }

    // Imports chart
    const importsCtx = document.getElementById('importsChart');
    if (importsCtx) {
        chartInstances.importsChart = new Chart(importsCtx, {
            type: 'pie',
            data: {
                labels: economicData.trade_data.imports.top_sources.map(d => d.country),
                datasets: [{
                    data: economicData.trade_data.imports.top_sources.map(d => d.percentage),
                    backgroundColor: chartColors.slice(0, 3),
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.parsed}%`;
                            }
                        }
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            });
    }

    // Export destinations chart
    const exportDestCtx = document.getElementById('exportDestinationsChart');
    if (exportDestCtx) {
        chartInstances.exportDestinationsChart = new Chart(exportDestCtx, {
            type: 'bar',
            data: {
                labels: economicData.trade_data.exports.top_destinations.map(d => d.country),
                datasets: [{
                    label: 'Export Value (£bn)',
                    data: economicData.trade_data.exports.top_destinations.map(d => d.value_bn),
                    backgroundColor: chartColors[0],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: £${context.parsed.y}bn`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return '£' + value + 'bn';
                            }
                        }
                    }
                }
            });
    }
}

// Scenario planning functionality
function initializeScenarioControls() {
    const sliders = {
        gdp: document.getElementById('gdpSlider'),
        inflation: document.getElementById('inflationSlider'),
        confidence: document.getElementById('confidenceSlider'),
        employment: document.getElementById('employmentSlider')
    };

    const values = {
        gdp: document.getElementById('gdpValue'),
        inflation: document.getElementById('inflationValue'),
        confidence: document.getElementById('confidenceValue'),
        employment: document.getElementById('employmentValue')
    };

    // Update slider values
    Object.keys(sliders).forEach(key => {
        if (sliders[key]) {
            sliders[key].addEventListener('input', function() {
                const value = this.value;
                if (key === 'confidence') {
                    values[key].textContent = value > 0 ? '+' + value : value;
                } else {
                    values[key].textContent = value + '%';
                }
                updateScenarioChart();
            });
        }
    });

    // Scenario buttons: set active scenario
    document.querySelectorAll('[data-scenario]').forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active class
            document.querySelectorAll('[data-scenario]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Update scenario and chart
            currentScenario = btn.dataset.scenario;
            updateScenarioChart();
        });
    });
}

function initializeScenarioCharts() {
    const ctx = document.getElementById('scenarioChart');
    if (!ctx) return;
    chartInstances.scenarioChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
              { label: 'GDP Growth (%)', data: [], borderColor: chartColors[0], backgroundColor: chartColors[0]+'20', yAxisID:'y' },
              { label: 'Unemployment (%)', data: [], borderColor: chartColors[1], backgroundColor: chartColors[1]+'20', yAxisID:'y1' }
            ]
         },
         options: {
             responsive: true,
             maintainAspectRatio: false,
             scales: {
                 y: {
                     type: 'linear',
                     display: true,
                     position: 'left',
                     title: {
                         display: true,
                         text: 'GDP Growth (%)'
                     }
                 },
                 y1: {
                     type: 'linear',
                     display: true,
                     position: 'right',
                     title: {
                         display: true,
                         text: 'Unemployment (%)'
                     },
                     grid: {
                         drawOnChartArea: false,
                     },
                 }
             }
         });
    // initial draw once scenarios loaded
    updateScenarioChart();
}

function updateScenarioChart() {
    const chart = chartInstances.scenarioChart;
    const sc = economicData.scenarios && economicData.scenarios[currentScenario];
    if (!chart || !sc) return;
    const labels = sc.gdp.map((_,i) => `T+${i+1}`);
    chart.data.labels = labels;
    chart.data.datasets[0].data = sc.gdp;
    chart.data.datasets[1].data = sc.unemployment;
    chart.update();
}

// Export functionality
function initializeExportFunctionality() {
    const exportBtn = document.getElementById('exportBtn');
    const printBtn = document.getElementById('printBtn');

    if (exportBtn) {
        exportBtn.addEventListener('click', exportToCSV);
    }

    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
}

function exportToCSV() {
    let csvContent = "Scottish Economic Health Dashboard Data\n\n";
    
    // Add GDP data
    csvContent += "GDP Growth (Annual)\n";
    csvContent += "Year,Growth Rate (%)\n";
    economicData.headline_indicators.gdp_growth.annual.forEach(row => {
        csvContent += `${row.year},${row.value}\n`;
    });
    
    csvContent += "\nUnemployment Rate (Quarterly)\n";
    csvContent += "Period,Scotland (%),UK (%)\n";
    economicData.headline_indicators.unemployment.quarterly.forEach(row => {
        csvContent += `${row.period},${row.scotland},${row.uk}\n`;
    });
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'scottish-economic-dashboard-data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}