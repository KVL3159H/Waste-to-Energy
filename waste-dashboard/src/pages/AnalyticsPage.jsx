import React from 'react';
import HistoricalCharts from '../components/HistoricalCharts';
import CarbonCreditEstimator from '../components/CarbonCreditEstimator';
import ExportButton from '../components/ExportButton';

export default function AnalyticsPage({ historicalSensor, dailySummary, energyMetrics }) {
  return (
    <div className="page-content animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">DATA ANALYTICS</h1>
          <p className="page-subtitle">Historical trends and offset calculations</p>
        </div>
        <div className="telemetry-badge">DATA LOG: NOMINAL</div>
      </div>
      
      <div className="analytics-layout">
        <div className="charts-main">
          <HistoricalCharts history={historicalSensor} />
        </div>
        <div className="analytics-sidebar">
          <CarbonCreditEstimator co2OffsetKg={energyMetrics?.co2_offset_kg ?? null} />
          <ExportButton historicalSensor={historicalSensor} />
        </div>
      </div>
    </div>
  );
}
