"""
Module: scenarios/modeling.py

Contains functions to generate baseline, optimistic, and pessimistic scenario projections
using simple time-series models and user-defined shocks.
"""
import json
import pandas as pd
from pathlib import Path
from statsmodels.tsa.arima.model import ARIMA


def load_historical_data(filepath: str) -> pd.DataFrame:
    """Load historical data (GDP, inflation, unemployment) from CSV or JSON."""
    if filepath.endswith('.json'):
        df = pd.read_json(filepath)
    else:
        df = pd.read_csv(filepath)
    df['date'] = pd.to_datetime(df['date'])
    df.set_index('date', inplace=True)
    return df


def forecast_series(series: pd.Series, periods: int) -> pd.Series:
    """Fit ARIMA(1,1,1) and forecast future periods."""
    model = ARIMA(series, order=(1,1,1))
    fitted = model.fit()
    forecast = fitted.forecast(steps=periods)
    forecast.index = pd.date_range(start=series.index[-1] + pd.offsets.DateOffset(months=1), periods=periods, freq='M')
    return forecast


def generate_baseline(df: pd.DataFrame, periods: int=12) -> dict:
    """Generate baseline forecasts for all key series."""
    results = {}
    for col in df.columns:
        fc = forecast_series(df[col], periods)
        results[col] = fc.round(2).tolist()
    return results


def apply_shock(baseline: dict, shock: dict) -> dict:
    """Apply a percentual shock to baseline forecasts."""
    shocked = {}
    for key, series in baseline.items():
        factor = 1 + shock.get(key, 0)
        shocked[key] = [round(v * factor, 2) for v in series]
    return shocked


def generate_scenarios(historical_path: str, output_path: str):
    """Load historical data, generate baseline, optimistic, pessimistic, and save JSON."""
    df = load_historical_data(historical_path)
    baseline = generate_baseline(df)
    # define shocks: optimistic = +10% GDP, -10% inflation, -5% unemployment
    optimistic_shock = {'gdp': 0.10, 'inflation': -0.10, 'unemployment': -0.05}
    pessimistic_shock = {'gdp': -0.10, 'inflation': 0.10, 'unemployment': 0.05}
    optimistic = apply_shock(baseline, optimistic_shock)
    pessimistic = apply_shock(baseline, pessimistic_shock)
    scenarios = {
        'baseline': baseline,
        'optimistic': optimistic,
        'pessimistic': pessimistic
    }
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w') as f:
        json.dump(scenarios, f, indent=2)

if __name__ == '__main__':
    # Example usage
    generate_scenarios('historical_data.json', 'scenarios.json')
