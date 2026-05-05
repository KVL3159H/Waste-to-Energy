import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, LineChart, Eye, Bell } from 'lucide-react';

const styles = {
  sidebar: {
    width: '260px',
    background: 'rgba(20, 30, 45, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  header: {
    padding: '28px 24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logo: {
    width: '40px',
    height: '40px',
    background: '#141E2D',
    border: '2px solid #E85D04',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E85D04',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 800,
    fontSize: '14px',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', // Hexagon shape
  },
  titleArea: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#F8F9FA',
    letterSpacing: '1px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  badge: {
    fontSize: '10px',
    color: '#FFB703',
    letterSpacing: '2px',
    marginTop: '2px',
    fontFamily: "'JetBrains Mono', monospace",
  },
  nav: {
    padding: '32px 0',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '16px 24px',
    textDecoration: 'none',
    color: '#9CA3AF',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '13px',
    letterSpacing: '1px',
    transition: 'all 0.2s ease',
    borderLeft: '4px solid transparent',
  },
  activeLink: {
    backgroundColor: 'rgba(232, 93, 4, 0.1)',
    color: '#E85D04',
    borderLeft: '4px solid #E85D04',
  },
  icon: {
    width: '18px',
    height: '18px',
  }
};

export default function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>
        <div style={styles.logoArea}>
          <div style={styles.logo}>W2W</div>
          <div style={styles.titleArea}>
            <div style={styles.title}>ARES 3</div>
            <div style={styles.badge}>MISSION CTRL</div>
          </div>
        </div>
      </div>
      <nav style={styles.nav}>
        <NavLink 
          to="/" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
        >
          <LayoutDashboard style={styles.icon} />
          TELEMETRY
        </NavLink>
        <NavLink 
          to="/analytics" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
        >
          <LineChart style={styles.icon} />
          ANALYTICS
        </NavLink>
        <NavLink 
          to="/vision" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
        >
          <Eye style={styles.icon} />
          AI VISION
        </NavLink>
        <NavLink 
          to="/alerts" 
          style={({ isActive }) => isActive ? { ...styles.navLink, ...styles.activeLink } : styles.navLink}
        >
          <Bell style={styles.icon} />
          ALERTS
        </NavLink>
      </nav>
    </aside>
  );
}
