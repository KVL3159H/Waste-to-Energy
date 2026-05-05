import React from 'react';
import ClassificationFeed from '../components/ClassificationFeed';

export default function VisionPage({ latestClassification }) {
  return (
    <div className="page-content animate-fade-in">
      <div className="page-header">
        <div>
          <h1 className="page-title">OPTICAL RECOGNITION</h1>
          <p className="page-subtitle">Real-time object classification from video feed</p>
        </div>
        <div className="telemetry-badge">LENS: ONLINE</div>
      </div>
      
      <div className="vision-layout">
        <ClassificationFeed classification={latestClassification} />
      </div>
    </div>
  );
}
