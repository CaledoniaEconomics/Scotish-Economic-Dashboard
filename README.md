# Scottish Economic Health Dashboard

A comprehensive, real-time dashboard providing insights into Scotland's economic performance across multiple key indicators. This interactive tool enables policymakers, businesses, and researchers to monitor economic trends and conduct scenario planning.

## 🏴 Live Dashboard

Visit the live dashboard: [Scottish Economic Health Dashboard](https://yourusername.github.io/Economic-Dashboard/)

## 📊 Key Features

- **Real-time Data**: Automatically updated daily from official sources
- **Historical Analysis**: Time series data going back to 2019
- **Interactive Visualizations**: Charts and graphs with hover tooltips
- **Scenario Planning**: Forecast economic impacts under different assumptions
- **Mobile Responsive**: Optimized for all devices
- **Data Export**: Download functionality for further analysis

## 📈 Economic Indicators Covered

### Headline Indicators
- **GDP Growth**: Quarterly and annual data for Scotland vs UK
- **Inflation Rate**: Monthly CPI data
- **Employment**: Unemployment rates, employment rates, economic inactivity
- **Business Confidence**: ICAEW Business Confidence Monitor data

### Sectoral Performance
- **Renewable Energy**: Generation capacity and percentage of demand met
- **Food & Drink**: Export values and growth rates
- **Financial Services**: GVA contribution and employment
- **Tourism**: Employment, GVA, and visitor numbers

### Labour Market
- **Regional Variations**: Employment rates across all Scottish local authorities
- **Skills Shortages**: Vacancy and skills shortage data
- **Youth Unemployment**: Age-specific employment statistics

### Trade Data
- **International Trade**: Goods exports and imports
- **EU Trade**: Post-Brexit trade relationship tracking
- **Trade Balance**: Export/import trends

## 🛠 Technical Setup

### Prerequisites
- Python 3.11+
- Git
- GitHub account (for hosting)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Economic-Dashboard.git
   cd Economic-Dashboard
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the data update script:**
   ```fish
   python3 update_dashboard_data.py
   ```

4. **Open the dashboard:**
   ```bash
   open index.html
   ```

### GitHub Pages Deployment

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial dashboard setup"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Enable Actions:**
   - The dashboard will automatically update daily via GitHub Actions
   - Manual updates can be triggered from the Actions tab

## 🔄 Data Sources

### Primary Sources
- **ONS (Office for National Statistics)**: GDP, employment, inflation data
- **Scottish Government**: Regional and sectoral statistics
- **Bank of England**: Financial and monetary data
- **ICAEW**: Business Confidence Monitor
- **Scottish Enterprise**: Business metrics
- **VisitScotland**: Tourism statistics

### Update Schedule
- **Automatic Updates**: Daily at 8:00 AM UTC
- **Data Refresh**: Real-time when new official statistics are released
- **Historical Data**: Extends back to 2019 for trend analysis

## 📊 Data Structure

The dashboard uses a JSON data file (`scottish_economic_data.json`) with the following structure:

```json
{
  "meta": {
    "last_updated": "2025-06-02",
    "data_sources": [...],
    "coverage_period": "2019-2025"
  },
  "headline_indicators": {
    "gdp_growth": {...},
    "inflation": {...},
    "employment": {...},
    "business_confidence": {...}
  },
  "sectoral_performance": {...},
  "trade_data": {...}
}
```

## 🎯 Usage Examples

### For Policymakers
- Monitor quarterly GDP trends for early economic signals
- Use scenario planning for policy impact assessment
- Compare Scotland's performance with UK averages
- Identify regional variations for targeted interventions

### For Businesses
- Track sector-specific performance indicators
- Monitor input cost inflation trends
- Use employment data for workforce planning
- Leverage scenario planning for strategic decisions

### For Researchers
- Access downloadable data for detailed analysis
- Use multiple time periods for trend analysis
- Compare across different economic sectors
- Validate findings with primary data sources

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-indicator`)
3. Make your changes
4. Test the dashboard locally
5. Commit your changes (`git commit -am 'Add new economic indicator'`)
6. Push to the branch (`git push origin feature/new-indicator`)
7. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For technical issues, data queries, or suggestions for improvement:
- Create an issue on GitHub
- Contact the Scottish Economic Analysis team

## 🔮 Roadmap

### Upcoming Features
- [ ] Real-time API integration with more data sources
- [ ] Advanced forecasting models
- [ ] Comparative analysis with other UK regions
- [ ] Mobile app version
- [ ] Data alerts and notifications
- [ ] Enhanced scenario modeling capabilities

### Data Enhancements
- [ ] Weekly high-frequency indicators
- [ ] Sector-specific business confidence
- [ ] Regional trade data
- [ ] Skills demand forecasting
- [ ] Environmental economic indicators

---

**Note**: This dashboard provides analysis based on official statistics and should be used alongside professional economic advice for decision-making.
# Scotish-Economic-Dashboard
