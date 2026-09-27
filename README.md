# Waste-to-Energy Monitoring Dashboard

A React-based dashboard for monitoring a waste-to-energy facility using real-time sensor telemetry, Firebase, analytics, alerts, and AI-vision classification.

The application source lives in the `waste-dashboard/` directory.

## What It Monitors

- methane concentration;
- core temperature;
- humidity and moisture;
- biogas output;
- generated electrical energy;
- CO₂ offset;
- processed waste volume;
- classification results from an AI vision pipeline;
- operational alerts.

## Dashboard Areas

- **Telemetry** — current facility and sensor state
- **Analytics** — historical trends and carbon-offset estimates
- **AI Vision** — latest visual classification result
- **Alerts** — active warnings and acknowledgement workflow

## Tech Stack

- React 18
- Firebase Realtime Database
- React Router
- Recharts
- Lucide React
- Create React App

## Getting Started

```bash
git clone https://github.com/KVL3159H/Waste-to-Energy.git
cd Waste-to-Energy/waste-dashboard
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

Fill in the Firebase values in `.env`, then run:

```bash
npm start
```

## Environment Configuration

The project expects Firebase configuration through environment variables such as:

```env
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_DATABASE_URL=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

Never commit production credentials.

## Data Flow

```text
Sensors / AI pipeline
        |
        v
Firebase Realtime Database
        |
        v
React Dashboard
  ├─ Telemetry
  ├─ Analytics
  ├─ Vision
  └─ Alerts
```

The UI listens to Firebase paths such as the latest sensor reading, classification results, energy metrics, daily summary, alerts, and historical sensor data.

## Build

```bash
cd waste-dashboard
npm run build
```

## Prototype Notice

This repository is an engineering prototype. Sensor thresholds, carbon-credit estimates, classifications, and operational decisions should be independently validated before use in a real facility.

## Roadmap

- add automated tests for data transforms and alert handling;
- document the Firebase data schema;
- add authentication and role-based access;
- add deployment instructions;
- add backend validation for incoming telemetry;
- improve offline/error-state handling.

## Contributing

Bug fixes, tests, data-validation improvements, accessibility improvements, and documentation contributions are welcome.

---

Built as an IoT and analytics interface for waste-to-energy monitoring.
