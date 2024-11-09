import React from 'react';

const Summary = ({ appointments }) => {
  const completedAppointments = appointments.filter((a) => a.status === 'Completed');

  return (
    <div>
      <h2>Consultation Summary</h2>
      <ul>
        {completedAppointments.map((appointment, index) => (
          <li key={index}>
            <strong>Patient:</strong> {appointment.patientName} <br />
            <strong>Issue:</strong> {appointment.issue} <br />
            <strong>Date:</strong> {appointment.date} <br />
            <strong>Billing Amount:</strong> $100 (Example) <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
