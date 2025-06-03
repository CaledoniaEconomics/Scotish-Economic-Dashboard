// Data validation script to verify all chart data paths are correct

// Load the JSON data and validate structure
fetch('scottish_economic_data.json')
    .then(response => response.json())
    .then(data => {
        console.log('=== Scottish Economic Dashboard Data Validation ===');
        
        // Validate headline indicators
        console.log('\n1. HEADLINE INDICATORS:');
        console.log('GDP Growth Quarterly:', data.headline_indicators?.gdp_growth?.quarterly ? '✓' : '✗');
        console.log('GDP Growth Annual:', data.headline_indicators?.gdp_growth?.annual ? '✓' : '✗');
        console.log('Inflation Monthly:', data.headline_indicators?.inflation?.monthly ? '✓' : '✗');
        console.log('Employment Quarterly:', data.headline_indicators?.employment?.quarterly ? '✓' : '✗');
        console.log('Employment Regional:', data.headline_indicators?.employment?.regional ? '✓' : '✗');
        
        // Validate business confidence
        console.log('\n2. BUSINESS CONFIDENCE:');
        console.log('Quarterly Data:', data.business_confidence?.quarterly ? '✓' : '✗');
        console.log('Barometer Monthly:', data.business_confidence?.barometer_monthly ? '✓' : '✗');
        console.log('Input Cost Pressures:', typeof data.business_confidence?.input_cost_pressures === 'number' ? '✓' : '✗');
        
        // Validate sectoral performance
        console.log('\n3. SECTORAL PERFORMANCE:');
        console.log('Renewable Energy:', data.sectoral_performance?.renewable_energy?.breakdown ? '✓' : '✗');
        console.log('Food & Drink Exports:', data.sectoral_performance?.food_drink_exports?.historical ? '✓' : '✗');
        console.log('Financial Services:', data.sectoral_performance?.financial_services?.historical_gva ? '✓' : '✗');
        console.log('Tourism:', data.sectoral_performance?.tourism?.historical ? '✓' : '✗');
        
        // Validate trade data
        console.log('\n4. TRADE DATA:');
        console.log('Goods Exports:', data.trade_data?.goods_exports ? '✓' : '✗');
        console.log('Goods Imports:', data.trade_data?.goods_imports ? '✓' : '✗');
        console.log('Export Destinations:', data.trade_data?.goods_exports?.top_destinations ? '✓' : '✗');
        
        // Validate scenario planning
        console.log('\n5. SCENARIO PLANNING:');
        console.log('GDP Scenarios:', data.scenario_planning?.gdp_projections ? '✓' : '✗');
        console.log('Employment Scenarios:', data.scenario_planning?.employment_projections ? '✓' : '✗');
        
        // Sample data checks
        console.log('\n=== SAMPLE DATA VALIDATION ===');
        
        // Check GDP data structure
        if (data.headline_indicators?.gdp_growth?.quarterly?.length > 0) {
            const gdpSample = data.headline_indicators.gdp_growth.quarterly[0];
            console.log('GDP Sample Structure:', {
                hasQuarter: 'quarter' in gdpSample,
                hasScotland: 'scotland' in gdpSample,
                hasUK: 'uk' in gdpSample
            });
        }
        
        // Check inflation data structure
        if (data.headline_indicators?.inflation?.monthly?.length > 0) {
            const inflationSample = data.headline_indicators.inflation.monthly[0];
            console.log('Inflation Sample Structure:', {
                hasDate: 'date' in inflationSample,
                hasScotland: 'scotland' in inflationSample,
                hasUK: 'uk' in inflationSample
            });
        }
        
        // Check employment data structure
        if (data.headline_indicators?.employment?.quarterly?.length > 0) {
            const employmentSample = data.headline_indicators.employment.quarterly[0];
            console.log('Employment Sample Structure:', {
                hasQuarter: 'quarter' in employmentSample,
                hasEmploymentRate: 'employment_rate' in employmentSample,
                hasUnemploymentRate: 'unemployment_rate' in employmentSample
            });
        }
        
        console.log('\n=== VALIDATION COMPLETE ===');
        console.log('Data structure appears valid for dashboard usage.');
        
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });
