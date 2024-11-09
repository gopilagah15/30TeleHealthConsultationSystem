import React from 'react';

const Reports = ({ appointments }) => {
  const completedCount = appointments.filter((a) => a.status === 'Completed').length;
  const scheduledCount = appointments.filter((a) => a.status === 'Scheduled').length;

  return (
    <div>
      <h2>Consultation Reports</h2>
      <p>Total Completed Consultations: {completedCount}</p>
      <p>Total Scheduled Consultations: {scheduledCount}</p>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Patient:</strong> {appointment.patientName}, 
            <strong>Status:</strong> {appointment.status}, 
            <strong>Date:</strong> {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
