import React, { memo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts';
import { formatTime } from '../utils';

const styles = {
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  card: {
    padding: '24px 20px 20px 20px',
  },
  title: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#9CA3AF',
    marginBottom: '24px',
    paddingLeft: '4px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  empty: {
    height: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#64748B',
    fontSize: '14px',
    fontFamily: "'JetBrains Mono', monospace",
  },
};

const tooltipStyle = {
  contentStyle: {
    background: 'rgba(11, 26, 47, 0.9)',
    backdropFilter: 'blur(4px)',
    border: '1px solid #E85D04',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(232, 93, 4, 0.2)',
    padding: '12px 16px',
    color: '#F8F9FA',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '12px',
  },
  labelStyle: { color: '#E85D04', fontWeight: 600, marginBottom: 8 },
};

const axisStyle = { stroke: '#475569', fontSize: 11, tickLine: false, fontFamily: "'JetBrains Mono', monospace" };

const EmptyChart = () => <div style={styles.empty}>NO TELEMETRY DATA</div>;

const MethaneChart = ({ data }) => {
  if (!data?.length) return <div className="glass-panel" style={styles.card}><div style={styles.title}>METHANE CONCENTRATION</div><EmptyChart /></div>;
  return (
    <div className="glass-panel" style={styles.card}>
      <div style={styles.title}>METHANE CONCENTRATION (PPM)</div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid stroke="#1E2A3A" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="timestamp" tickFormatter={formatTime} {...axisStyle} />
          <YAxis {...axisStyle} width={45} />
          <Tooltip {...tooltipStyle} labelFormatter={formatTime} formatter={(v) => [`${v} ppm`, 'Methane']} />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8, fontFamily: "'JetBrains Mono', monospace", color: '#9CA3AF' }} />
          <ReferenceLine y={500} stroke="#D32F2F" strokeDasharray="4 4" label={{ value: 'WARN: 500', fill: '#D32F2F', fontSize: 11, position: 'insideTopRight', fontFamily: "'JetBrains Mono', monospace" }} />
          <Line type="monotone" dataKey="methane_ppm" stroke="#E85D04" strokeWidth={2} dot={false} name="Methane (ppm)" style={{ filter: 'drop-shadow(0 0 6px rgba(232, 93, 4, 0.6))' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const TemperatureChart = ({ data }) => {
  if (!data?.length) return <div className="glass-panel" style={styles.card}><div style={styles.title}>CORE TEMPERATURE</div><EmptyChart /></div>;
  return (
    <div className="glass-panel" style={styles.card}>
      <div style={styles.title}>CORE TEMPERATURE (°C)</div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid stroke="#1E2A3A" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="timestamp" tickFormatter={formatTime} {...axisStyle} />
          <YAxis {...axisStyle} width={45} />
          <Tooltip {...tooltipStyle} labelFormatter={formatTime} formatter={(v) => [`${v} °C`, 'Temp']} />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8, fontFamily: "'JetBrains Mono', monospace", color: '#9CA3AF' }} />
          <ReferenceLine y={50} stroke="#D32F2F" strokeDasharray="4 4" label={{ value: 'WARN: 50°C', fill: '#D32F2F', fontSize: 11, position: 'insideTopRight', fontFamily: "'JetBrains Mono', monospace" }} />
          <Line type="monotone" dataKey="temperature_c" stroke="#FFB703" strokeWidth={2} dot={false} name="Temperature (°C)" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 183, 3, 0.5))' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const HumidityMoistureChart = ({ data }) => {
  if (!data?.length) return <div className="glass-panel" style={styles.card}><div style={styles.title}>HUMIDITY & MOISTURE</div><EmptyChart /></div>;
  return (
    <div className="glass-panel" style={styles.card}>
      <div style={styles.title}>ENVIRONMENTAL %</div>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid stroke="#1E2A3A" strokeDasharray="4 4" vertical={false} />
          <XAxis dataKey="timestamp" tickFormatter={formatTime} {...axisStyle} />
          <YAxis {...axisStyle} width={45} domain={[0, 100]} />
          <Tooltip {...tooltipStyle} labelFormatter={formatTime} formatter={(v) => [`${v}%`, '']} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
          <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8, fontFamily: "'JetBrains Mono', monospace", color: '#9CA3AF' }} />
          <Bar dataKey="humidity_pct" fill="rgba(59, 130, 246, 0.6)" stroke="#E85D04" strokeWidth={1} radius={[2, 2, 0, 0]} name="Humidity" />
          <Bar dataKey="moisture_pct" fill="rgba(45, 198, 83, 0.4)" stroke="#E85D04" strokeWidth={1} radius={[2, 2, 0, 0]} name="Moisture" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const HistoricalCharts = memo(({ history }) => (
  <div style={styles.section}>
    <MethaneChart data={history} />
    <TemperatureChart data={history} />
    <HumidityMoistureChart data={history} />
  </div>
));

export default HistoricalCharts;