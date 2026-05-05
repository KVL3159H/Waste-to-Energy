import React from 'react';
import { formatDateTime } from '../utils';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '20px 36px',
    background: 'rgba(11, 26, 47, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    flexWrap: 'wrap',
    gap: '16px',
  },
  rightArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  timestamp: {
    fontSize: '13px',
    color: '#E85D04',
    fontFamily: "'JetBrains Mono', monospace",
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  status: (connected) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    background: connected ? 'rgba(45, 198, 83, 0.1)' : 'rgba(211, 47, 47, 0.1)',
    border: `1px solid ${connected ? '#2DC653' : '#D32F2F'}`,
    borderRadius: '40px',
    fontSize: '11px',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    letterSpacing: '1px',
    color: connected ? '#2DC653' : '#D32F2F',
    textTransform: 'uppercase',
  }),
  dot: (connected) => ({
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: connected ? '#2DC653' : '#D32F2F',
    boxShadow: connected ? '0 0 8px #2DC653' : '0 0 8px #D32F2F',
    animation: connected ? 'pulse-green 1.5s infinite' : 'none',
  }),
};

export default function Header({ connected, lastUpdated }) {
  return (
    <header style={styles.header}>
      <div style={styles.rightArea}>
        {lastUpdated && <div style={styles.timestamp}>SYS_TIME: {formatDateTime(lastUpdated)}</div>}
        <div style={styles.status(connected)}>
          <div style={styles.dot(connected)} />
          {connected ? 'LIVE TELEMETRY' : 'SIGNAL LOST'}
        </div>
      </div>
      <style>{`
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </header>
  );
}