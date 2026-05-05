import React from 'react';
import { calculateCarbonCredits, estimateCreditValue } from '../utils';

const styles = {
  card: {
    padding: '24px',
  },
  title: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#9CA3AF',
    marginBottom: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '16px',
  },
  label: {
    fontSize: '13px',
    color: '#E5E7EB',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  value: {
    fontSize: '28px',
    fontWeight: 700,
    color: '#FFB703',
  },
  valueSmall: {
    fontSize: '20px',
    fontWeight: 700,
    color: '#2DC653',
  },
  divider: {
    height: '1px',
    background: 'rgba(255, 255, 255, 0.1)',
    margin: '20px 0',
  },
  note: {
    fontSize: '11px',
    color: '#64748B',
    textAlign: 'center',
    marginTop: '16px',
    fontFamily: "'JetBrains Mono', monospace",
  },
};

const RATE_PER_CREDIT = 15;

export default function CarbonCreditEstimator({ co2OffsetKg }) {
  const hasData = co2OffsetKg != null && !isNaN(co2OffsetKg);
  const credits = hasData ? calculateCarbonCredits(co2OffsetKg) : null;
  const value = credits != null ? estimateCreditValue(credits, RATE_PER_CREDIT) : null;

  return (
    <div className="glass-panel" style={styles.card}>
      <div style={styles.title}>CARBON CREDITS</div>
      <div style={styles.row}>
        <span style={styles.label}>CO₂ OFFSET</span>
        <span className="mono-text" style={{ fontSize: '18px', fontWeight: 600, color: '#F8F9FA' }}>
          {hasData ? `${co2OffsetKg.toLocaleString()} KG` : '—'}
        </span>
      </div>
      <div style={styles.divider} />
      <div style={styles.row}>
        <span style={styles.label}>EST. CREDITS</span>
        <span className="mono-text" style={styles.value}>{credits != null ? credits.toFixed(2) : '—'}</span>
      </div>
      <div style={styles.row}>
        <span style={styles.label}>EST. VALUE</span>
        <span className="mono-text" style={styles.valueSmall}>{value != null ? `$${value.toFixed(2)}` : '—'}</span>
      </div>
      <div style={styles.note}>1 CREDIT = 1 TONNE CO₂ @ ${RATE_PER_CREDIT}/CRDT</div>
    </div>
  );
}