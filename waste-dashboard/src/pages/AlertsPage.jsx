import React from 'react';
import AlertsPanel from '../components/AlertsPanel';

export default function AlertsPage({ alerts, onAcknowledge }) {
  return (
    <div className="page-content animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">SYSTEM ALERTS</h1>
          <p className="page-subtitle">Manage and acknowledge facility alerts and warnings</p>
        </div>
        <div className="telemetry-badge">MONITOR: ACTIVE</div>
      </div>
      
      <div className="alerts-layout">
        <AlertsPanel alerts={alerts} onAcknowledge={onAcknowledge} />
      </div>
    </div>
  );
}
