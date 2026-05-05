import React from 'react';
import { Download } from 'lucide-react';
import { convertToCsv, todayString } from '../utils';

const styles = {
  card: {
    padding: '24px',
  },
  title: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#9CA3AF',
    marginBottom: '12px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  recordCount: {
    fontSize: '12px',
    color: '#64748B',
    marginBottom: '24px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  button: (disabled) => ({
    width: '100%',
    padding: '14px 20px',
    background: disabled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(232, 93, 4, 0.1)',
    color: disabled ? '#64748B' : '#E85D04',
    border: `1px solid ${disabled ? 'rgba(255, 255, 255, 0.1)' : '#E85D04'}`,
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  }),
};

export default function ExportButton({ historicalSensor }) {
  const records = historicalSensor || [];
  const isEmpty = records.length === 0;

  const handleExport = () => {
    if (isEmpty) return;
    const csv = convertToCsv(records);
    const filename = `telemetry-log-${todayString()}.csv`;
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-panel" style={styles.card}>
      <div style={styles.title}>DATA EXPORT</div>
      <div style={styles.recordCount}>
        {isEmpty ? 'NO RECORDS' : `${records.length.toLocaleString()} RECORDS AVAILABLE`}
      </div>
      <button
        style={styles.button(isEmpty)}
        onClick={handleExport}
        disabled={isEmpty}
        onMouseEnter={(e) => {
          if (!isEmpty) {
            e.currentTarget.style.background = '#E85D04';
            e.currentTarget.style.color = '#F8F9FA';
          }
        }}
        onMouseLeave={(e) => {
          if (!isEmpty) {
            e.currentTarget.style.background = 'rgba(232, 93, 4, 0.1)';
            e.currentTarget.style.color = '#E85D04';
          }
        }}
      >
        <Download size={18} />
        DOWNLOAD CSV
      </button>
    </div>
  );
}