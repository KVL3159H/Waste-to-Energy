import React, { useEffect, useState } from 'react';
import { formatDateTime } from '../utils';

const styles = {
  card: {
    padding: '28px',
  },
  cardPulse: {
    padding: '28px',
    borderColor: '#E85D04',
    boxShadow: '0 0 20px rgba(232, 93, 4, 0.4)',
  },
  title: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#9CA3AF',
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  wasteType: {
    fontSize: '36px',
    fontWeight: 800,
    color: '#F8F9FA',
    marginBottom: '16px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textShadow: '0 0 10px rgba(255,255,255,0.2)',
  },
  placeholder: {
    fontSize: '14px',
    color: '#64748B',
    fontStyle: 'italic',
    padding: '20px 0',
  },
  confidenceSection: {
    marginTop: '8px',
  },
  confidenceLabel: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#9CA3AF',
    marginBottom: '8px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  barTrack: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
    height: '6px',
    overflow: 'hidden',
  },
  barFill: (color, width) => ({
    width: `${width}%`,
    height: '100%',
    background: color,
    borderRadius: '4px',
    transition: 'width 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
    boxShadow: `0 0 8px ${color}`,
  }),
  timestamp: {
    fontSize: '12px',
    color: '#E85D04',
    marginTop: '24px',
    fontFamily: "'JetBrains Mono', monospace",
    textTransform: 'uppercase',
  },
};

export default function ClassificationFeed({ classification }) {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (classification) {
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [classification]);

  if (!classification) {
    return (
      <div className="glass-panel" style={styles.card}>
        <div style={styles.title}>OPTICAL FEED</div>
        <div className="mono-text" style={styles.placeholder}>WAITING FOR VISUAL DATA...</div>
      </div>
    );
  }

  const { waste_type, confidence, timestamp } = classification;
  const confPct = confidence * 100;

  let confColor = '#2DC653';
  if (confPct < 60) confColor = '#D32F2F';
  else if (confPct < 85) confColor = '#FFB703';

  const cardStyle = {
    ...styles.card,
    ...(pulse ? styles.cardPulse : {}),
  };

  return (
    <div className="glass-panel" style={cardStyle}>
      <div style={styles.title}>OPTICAL FEED</div>
      <div style={styles.wasteType}>{waste_type ?? 'UNKNOWN'}</div>
      <div style={styles.confidenceSection}>
        <div style={styles.confidenceLabel}>
          MATCH PROBABILITY: <span className="mono-text" style={{ color: confColor }}>{confPct.toFixed(1)}%</span>
        </div>
        <div style={styles.barTrack}>
          <div style={styles.barFill(confColor, confPct)} />
        </div>
      </div>
      <div style={styles.timestamp}>CAPTURE_TIME: {formatDateTime(timestamp)}</div>
    </div>
  );
}