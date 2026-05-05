import React from 'react';
import KPICards from '../components/KPICards';
import SensorGauges from '../components/SensorGauges';

export default function DashboardPage({ energyMetrics, dailySummary, latestSensor }) {
  return (
    <div className="page-content animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">TELEMETRY OVERVIEW</h1>
          <p className="page-subtitle">Real-time facility metrics and environmental sensors</p>
        </div>
        <div className="telemetry-badge">STREAM: ACTIVE</div>
      </div>
      <div className="kpi-grid">
        <KPICards energyMetrics={energyMetrics} dailySummary={dailySummary} />
      </div>
      <div className="gauges-section">
        <SensorGauges sensor={latestSensor} />
      </div>
    </div>
  );
}
