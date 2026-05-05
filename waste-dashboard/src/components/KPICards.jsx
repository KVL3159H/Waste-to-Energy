import React from 'react';
import { Flame, Zap, Leaf, Recycle } from 'lucide-react';

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
  },
  card: {
    padding: '24px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  iconWrapper: (color) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: `1px solid ${color}`,
    color: color,
    background: 'rgba(20, 30, 45, 0.4)',
  }),
  label: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  value: (color) => ({
    fontSize: '32px',
    color: '#F8F9FA',
    lineHeight: 1.2,
    marginBottom: '4px',
  }),
  unit: {
    fontSize: '14px',
    color: '#9CA3AF',
    marginLeft: '6px',
    fontFamily: "'Inter', sans-serif",
  },
  footer: {
    fontSize: '11px',
    color: '#6B7280',
    marginTop: '16px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
};

const formatValue = (val) => (val == null ? '—' : typeof val === 'number' ? val.toLocaleString() : val);

const KpiCard = ({ label, value, unit, color, footer, icon: Icon }) => (
  <div className="glass-panel" style={styles.card}>
    <div style={styles.header}>
      <div style={styles.iconWrapper(color)}>
        <Icon size={16} />
      </div>
      <div style={styles.label}>{label}</div>
    </div>
    <div>
      <span className="mono-text" style={styles.value(color)}>{formatValue(value)}</span>
      {value != null && unit && <span style={styles.unit}>{unit}</span>}
    </div>
    {footer && <div style={styles.footer}>{footer}</div>}
  </div>
);

export default function KPICards({ energyMetrics, dailySummary }) {
  return (
    <div style={styles.grid}>
      <KpiCard 
        label="BIOGAS OUTPUT" 
        value={energyMetrics?.biogas_m3} 
        unit="m³" 
        color="#E85D04" 
        footer="CURRENT CYCLE" 
        icon={Flame} 
      />
      <KpiCard 
        label="POWER GENERATED" 
        value={energyMetrics?.kwh_generated} 
        unit="kWh" 
        color="#FFB703" 
        footer="ELECTRICAL YIELD" 
        icon={Zap} 
      />
      <KpiCard 
        label="CO₂ OFFSET" 
        value={energyMetrics?.co2_offset_kg} 
        unit="kg" 
        color="#2DC653" 
        footer="EMISSIONS REDUCED" 
        icon={Leaf} 
      />
      <KpiCard 
        label="WASTE INTAKE" 
        value={dailySummary?.waste_processed_kg} 
        unit="kg" 
        color="#3B82F6" 
        footer="MATERIAL PROCESSED" 
        icon={Recycle} 
      />
    </div>
  );
}