import React from 'react';

const Alerts = ({ alerts }) => {
  return (
    <div>
      <h2>Alerts</h2>
      {alerts.map((alert, index) => (
        <div key={index} style={{ color: alert.type === 'success' ? 'green' : 'blue' }}>
          {alert.message}
        </div>
      ))}
    </div>
  );
};

export default Alerts;
