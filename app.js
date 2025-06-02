// Scottish Economic Health Dashboard JavaScript

// Economic data
const economicData = {
  "headline_indicators": {
    "gdp_growth": {
      "current": 1.1,
      "quarterly": [
        {"period": "Q1 2024", "value": 0.3},
        {"period": "Q2 2024", "value": 0.2},
        {"period": "Q3 2024", "value": 0.4},
        {"period": "Q4 2024", "value": 0.0},
        {"period": "Q1 2025", "value": 0.7}
      ],
      "annual": [
        {"year": 2020, "value": -9.7},
        {"year": 2021, "value": 4.1},
        {"year": 2022, "value": 2.8},
        {"year": 2023, "value": 0.5},
        {"year": 2024, "value": 1.1}
      ]
    },
    "inflation": {
      "current": 3.5,
      "monthly": [
        {"month": "Jan 2024", "cpi": 4.0, "rpi": 4.9},
        {"month": "Feb 2024", "cpi": 3.4, "rpi": 4.5},
        {"month": "Mar 2024", "cpi": 3.2, "rpi": 4.3},
        {"month": "Apr 2024", "cpi": 2.3, "rpi": 3.3},
        {"month": "May 2024", "cpi": 2.0, "rpi": 2.9},
        {"month": "Jun 2024", "cpi": 2.0, "rpi": 2.9},
        {"month": "Jul 2024", "cpi": 2.2, "rpi": 3.2},
        {"month": "Aug 2024", "cpi": 2.2, "rpi": 3.2},
        {"month": "Sep 2024", "cpi": 1.7, "rpi": 2.4},
        {"month": "Oct 2024", "cpi": 2.3, "rpi": 3.3},
        {"month": "Nov 2024", "cpi": 2.3, "rpi": 3.4},
        {"month": "Dec 2024", "cpi": 2.5, "rpi": 3.5},
        {"month": "Jan 2025", "cpi": 3.0, "rpi": 3.9},
        {"month": "Feb 2025", "cpi": 3.2, "rpi": 4.1},
        {"month": "Mar 2025", "cpi": 3.3, "rpi": 4.2},
        {"month": "Apr 2025", "cpi": 3.5, "rpi": 4.4}
      ]
    },
    "unemployment": {
      "current": 3.7,
      "quarterly": [
        {"period": "Q1 2024", "scotland": 4.3, "uk": 4.2},
        {"period": "Q2 2024", "scotland": 4.1, "uk": 4.4},
        {"period": "Q3 2024", "scotland": 3.3, "uk": 4.3},
        {"period": "Q4 2024", "scotland": 3.6, "uk": 4.1},
        {"period": "Q1 2025", "scotland": 3.7, "uk": 4.2}
      ]
    },
    "employment_rate": {
      "current": 74.1,
      "quarterly": [
        {"period": "Q1 2024", "scotland": 73.5, "uk": 74.5},
        {"period": "Q2 2024", "scotland": 73.8, "uk": 74.8},
        {"period": "Q3 2024", "scotland": 73.7, "uk": 74.8},
        {"period": "Q4 2024", "scotland": 73.2, "uk": 74.5},
        {"period": "Q1 2025", "scotland": 74.1, "uk": 74.7}
      ]
    }
  },
  "business_metrics": {
    "confidence_index": {
      "current": 10.4,
      "quarterly": [
        {"period": "Q1 2024", "scotland": 14.2, "uk": 8.1},
        {"period": "Q2 2024", "scotland": 15.8, "uk": 12.3},
        {"period": "Q3 2024", "scotland": 14.2, "uk": 10.2},
        {"period": "Q4 2024", "scotland": 13.1, "uk": 0.2},
        {"period": "Q1 2025", "scotland": 10.4, "uk": -3.0}
      ]
    },
    "business_barometer": {
      "current": 52,
      "monthly": [
        {"month": "Feb 2025", "value": 53},
        {"month": "Mar 2025", "value": 48},
        {"month": "Apr 2025", "value": 40},
        {"month": "May 2025", "value": 52}
      ]
    },
    "input_costs": {
      "increase_percentage": 82,
      "sectors": [
        {"sector": "Manufacturing", "increase": 85},
        {"sector": "Services", "increase": 78},
        {"sector": "Construction", "increase": 88},
        {"sector": "Retail", "increase": 75}
      ]
    }
  },
  "sectoral_performance": {
    "renewable_energy": {
      "electricity_generation_percentage": 113,
      "capacity_gw": 15.0,
      "breakdown": [
        {"source": "Onshore Wind", "percentage": 62, "capacity_gw": 9.3},
        {"source": "Offshore Wind", "percentage": 15, "capacity_gw": 2.25},
        {"source": "Hydro", "percentage": 12, "capacity_gw": 1.8},
        {"source": "Solar", "percentage": 8, "capacity_gw": 1.2},
        {"source": "Other", "percentage": 3, "capacity_gw": 0.45}
      ]
    },
    "food_drink": {
      "export_value_bn": 8.1,
      "growth_rate": 30.6,
      "breakdown": [
        {"category": "Beverages", "value_bn": 6.2, "percentage": 76},
        {"category": "Food", "value_bn": 1.9, "percentage": 24}
      ]
    },
    "financial_services": {
      "gva_bn": 14.76,
      "percentage_of_economy": 10,
      "employment": 149000,
      "growth_target_bn": 21
    },
    "tourism": {
      "enterprises": 14145,
      "employment": 207000,
      "turnover_bn": 6.93,
      "gva_bn": 3.76
    }
  },
  "labour_market": {
    "employment_rate": 74.1,
    "economic_inactivity": 22.9,
    "youth_unemployment": 9.3,
    "skills_shortages": {
      "percentage_with_vacancies": 25,
      "skill_shortage_vacancies": 31,
      "affected_areas": ["Skilled trades", "Associate professionals", "Professionals"],
      "skills_needed": ["Technical", "Analytical", "Digital"]
    },
    "regional_employment": [
      {"region": "Orkney Islands", "rate": 87.1},
      {"region": "Perth and Kinross", "rate": 83.4},
      {"region": "Na h-Eileanan Siar", "rate": 82.3},
      {"region": "Glasgow City", "rate": 67.3},
      {"region": "Inverclyde", "rate": 68.3},
      {"region": "Dundee City", "rate": 68.6}
    ]
  },
  "trade_data": {
    "exports": {
      "total_goods_bn": 45.5,
      "eu_percentage": 38,
      "top_destinations": [
        {"country": "Netherlands", "value_bn": 5.2},
        {"country": "United States", "value_bn": 4.8},
        {"country": "Germany", "value_bn": 3.1},
        {"country": "France", "value_bn": 2.9},
        {"country": "Norway", "value_bn": 2.3}
      ]
    },
    "imports": {
      "total_goods_bn": 38.2,
      "eu_percentage": 49,
      "top_sources": [
        {"country": "EU", "percentage": 49},
        {"country": "United States", "percentage": 13},
        {"country": "China", "percentage": 13}
      ]
    }
  },
  "forecasting_scenarios": {
    "baseline": {
      "gdp_growth": [1.3, 1.4, 1.5, 1.6, 1.7],
      "unemployment": [3.8, 3.9, 4.0, 4.1, 4.2],
      "inflation": [2.5, 2.3, 2.1, 2.0, 2.0]
    },
    "optimistic": {
      "gdp_growth": [1.8, 2.0, 2.2, 2.3, 2.4],
      "unemployment": [3.2, 3.0, 2.8, 2.7, 2.6],
      "inflation": [2.0, 1.8, 1.9, 2.0, 2.1]
    },
    "pessimistic": {
      "gdp_growth": [0.8, 0.6, 0.9, 1.0, 1.1],
      "unemployment": [4.5, 5.2, 5.8, 5.5, 5.0],
      "inflation": [3.2, 3.8, 3.5, 3.0, 2.8]
    }
  }
};

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
        mode: 'index'
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

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCharts();
    initializeScenarioControls();
    initializeExportFunctionality();
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

    // Scenario buttons
    document.querySelectorAll('[data-scenario]').forEach(btn => {
        btn.addEventListener('click', function() {
            const scenario = this.dataset.scenario;
            applyScenario(scenario, sliders, values);
        });
    });
}

function applyScenario(scenario, sliders, values) {
    const scenarios = {
        optimistic: { gdp: 2.2, inflation: 2.0, confidence: 20, employment: 2.5 },
        baseline: { gdp: 1.5, inflation: 2.5, confidence: 10, employment: 1.5 },
        pessimistic: { gdp: 0.8, inflation: 3.5, confidence: -10, employment: 0.5 }
    };

    const params = scenarios[scenario];
    Object.keys(params).forEach(key => {
        if (sliders[key]) {
            sliders[key].value = params[key];
            if (key === 'confidence') {
                values[key].textContent = params[key] > 0 ? '+' + params[key] : params[key];
            } else {
                values[key].textContent = params[key] + '%';
            }
        }
    });

    updateScenarioChart();
}

function initializeScenarioCharts() {
    // Initialize scenario chart
    const scenarioCtx = document.getElementById('scenarioChart');
    if (scenarioCtx) {
        chartInstances.scenarioChart = new Chart(scenarioCtx, {
            type: 'line',
            data: {
                labels: ['2025', '2026', '2027', '2028', '2029'],
                datasets: [{
                    label: 'GDP Growth (%)',
                    data: [1.5, 1.6, 1.7, 1.8, 1.9],
                    borderColor: chartColors[0],
                    backgroundColor: chartColors[0] + '20',
                    yAxisID: 'y'
                }, {
                    label: 'Unemployment (%)',
                    data: [3.8, 3.9, 4.0, 4.1, 4.2],
                    borderColor: chartColors[1],
                    backgroundColor: chartColors[1] + '20',
                    yAxisID: 'y1'
                }]
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
            }
        });
    }

    // Scenario comparison chart
    const comparisonCtx = document.getElementById('scenarioComparisonChart');
    if (comparisonCtx) {
        chartInstances.scenarioComparisonChart = new Chart(comparisonCtx, {
            type: 'bar',
            data: {
                labels: ['Optimistic', 'Baseline', 'Pessimistic'],
                datasets: [{
                    label: 'Average GDP Growth',
                    data: [2.1, 1.5, 0.9],
                    backgroundColor: chartColors.slice(0, 3),
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
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
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

function updateScenarioChart() {
    if (chartInstances.scenarioChart) {
        // Get current slider values
        const gdp = parseFloat(document.getElementById('gdpSlider').value);
        const unemployment = 5 - gdp; // Inverse relationship
        
        // Generate 5-year projection
        const gdpData = [];
        const unemploymentData = [];
        
        for (let i = 0; i < 5; i++) {
            gdpData.push(gdp + (i * 0.1));
            unemploymentData.push(unemployment - (i * 0.05));
        }
        
        chartInstances.scenarioChart.data.datasets[0].data = gdpData;
        chartInstances.scenarioChart.data.datasets[1].data = unemploymentData;
        chartInstances.scenarioChart.update();
    }
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