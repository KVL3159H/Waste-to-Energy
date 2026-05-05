import React from 'react';
import { formatDateTime } from '../utils';

const styles = {
  card: {
    padding: '28px',
  },
  title: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#9CA3AF',
    marginBottom: '24px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  empty: {
    fontSize: '14px',
    color: '#64748B',
    fontStyle: 'italic',
    textAlign: 'center',
    padding: '20px 0',
    fontFamily: "'JetBrains Mono', monospace",
  },
  alertItem: (isCritical) => ({
    background: isCritical ? 'rgba(211, 47, 47, 0.1)' : 'rgba(232, 93, 4, 0.1)',
    border: `1px solid ${isCritical ? '#D32F2F' : '#E85D04'}`,
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  alertContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  alertMessage: (isCritical) => ({
    fontSize: '15px',
    fontWeight: 600,
    color: isCritical ? '#EF4444' : '#FFB703',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  }),
  alertTime: {
    fontSize: '12px',
    color: '#9CA3AF',
    fontFamily: "'JetBrains Mono', monospace",
  },
  ackButton: {
    background: 'transparent',
    color: '#F8F9FA',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: "'JetBrains Mono', monospace",
  }
};

export default function AlertsPanel({ alerts, onAcknowledge }) {
  if (!alerts || alerts.length === 0) {
    return (
      <div className="glass-panel" style={styles.card}>
        <div style={styles.title}>ACTIVE ALERTS</div>
        <div style={styles.empty}>NO ALERTS DETECTED. SYSTEM NOMINAL.</div>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={styles.card}>
      <div style={styles.title}>ACTIVE ALERTS ({alerts.length})</div>
      <div>
        {alerts.map((alert) => {
          // Determine criticality based on alert type or message if possible. Default to warning.
          const isCritical = alert.type === 'critical' || (alert.message && alert.message.toLowerCase().includes('critical'));
          
          return (
            <div key={alert.id} style={styles.alertItem(isCritical)}>
              <div style={styles.alertContent}>
                <div style={styles.alertMessage(isCritical)}>{alert.message || alert.type || 'UNKNOWN ALERT'}</div>
                <div style={styles.alertTime}>{alert.timestamp ? formatDateTime(alert.timestamp) : 'JUST NOW'}</div>
              </div>
              <button
                style={styles.ackButton}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E85D04';
                  e.currentTarget.style.borderColor = '#E85D04';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                }}
                onClick={() => onAcknowledge(alert.id)}
              >
                ACKNOWLEDGE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}