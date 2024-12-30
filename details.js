// Function to go back to the calculator page
function goBack() {
    window.location.href = "s.html";
}
function toggleDescription(descId) {
    const descElement = document.getElementById(descId);
    if (descElement.style.display === 'none') {
        descElement.style.display = 'block';
    } else {
        descElement.style.display = 'none';
    }
}

// Parse URL parameters to get calculator inputs
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        principal: parseFloat(params.get('principal')),
        years: parseFloat(params.get('years')),
        rate: parseFloat(params.get('rate')),
        couponRate : parseFloat(params.get('couponRate')),
    };
}

// Create the Yield Curve Chart based on input values
function createYieldCurveChart(principal, years, rate) {
    const ctx = document.getElementById('yieldCurveChart').getContext('2d');
    
    // Generate yield rates for each year
    const yieldRates = Array.from({ length: years }, (_, i) => 
        (rate + i * 0.2).toFixed(2)  // Increment rate by 0.2% each year
    );

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: years }, (_, i) => i + 1),  // Year labels
            datasets: [{
                label: 'Yield (%)',
                data: yieldRates,
                borderColor: '#e67e22',
                fill: false,
                tension: 0.3,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#ddd' }
                },
            },
            scales: {
                x: {
                    title: { display: true, text: 'Years to Maturity', color: '#ddd' },
                    ticks: {
                        color: '#ddd',
                        
                        font: { size: 10 },
                    },
                },
                y: {
                    title: { display: true, text: 'Yield (%)', color: '#ddd' },
                    ticks: {
                        color: '#ddd',
                        
                        font: { size: 10 },
                    },
                },
            },
        }
    });
}


// Create the Price Sensitivity Chart based on input values
function createPriceSensitivityChart(principal, years) {
    const ctx = document.getElementById('priceSensitivityChart').getContext('2d');
    const interestRates = [1, 2, 3, 4, 5, 6, 7];
    
    const prices = interestRates.map(rate => {
        return principal / Math.pow(1 + rate / 100, years);
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: interestRates,
            datasets: [{
                label: 'Bond Price',
                data: prices,
                borderColor: '#3498db',
                fill: false,
                tension: 0.3,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#ddd' }
                },
            },
            scales: {
                x: {
                    title: { display: true, text: 'Interest Rate (%)', color: '#ddd' },
                    ticks: { color: '#ddd' },
                },
                y: {
                    title: { display: true, text: 'Bond Price ($)', color: '#ddd' },
                    ticks: { color: '#ddd' },
                },
            },
        }
    });
}

function createBondReturnChart(principal, years, couponRate, rate) {
    const ctx = document.getElementById('bondReturnChart').getContext('2d');

    // Simulated bond returns based on coupon rate and interest rate changes
    const returns = Array.from({ length: years }, (_, i) => {
        const interestRate =  rate + i * 0.1; // Simulating a small increase in interest rates
        return (principal * couponRate / 100) - (interestRate * principal / 100);
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: years }, (_, i) => `Year ${i + 1}`), // Year labels
            datasets: [{
                label: 'Bond Returns ($)',
                data: returns,
                borderColor: '#2ecc71',
                fill: false,
                tension: 0.3,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#ddd' }
                },
            },
            scales: {
                x: {
                    title: { display: true, text: 'Years', color: '#ddd' },
                    ticks: {
                        color: '#ddd',
                        maxTicksLimit: 5,
                        font: { size: 10 },
                    },
                },
                y: {
                    title: { display: true, text: 'Bond Returns ($)', color: '#ddd' },
                    ticks: {
                        color: '#ddd',
                        stepSize: 50,
                        font: { size: 10 },
                    },
                },
            },
        }
    });
}

function createPCAChart() {
    const ctx = document.getElementById('pcaChart').getContext('2d');

    // Simulated data for PCA: Assume each component represents a different risk factor
    const components = [65, 30];  // Simulated values representing the variance explained by each component

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Component 1', 'Component 2'],
            datasets: [{
                label: 'Variance Explained (%)',
                data: components,
                backgroundColor: ['#3498db', '#e67e22'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    title: { display: true, text: 'Variance Explained (%)', color: '#ddd' },
                    ticks: {
                        color: '#ddd',
                        beginAtZero: true,
                    },
                },
            },
        }
    });
}



// Initialize Charts based on URL parameters
window.onload = function() {
    const { principal, years, rate,  couponRate } = getUrlParams();
    createYieldCurveChart(principal, years, rate);
    createPriceSensitivityChart(principal, years);
    createBondReturnChart(principal,years,couponRate, rate);
    createPCAChart();

};



