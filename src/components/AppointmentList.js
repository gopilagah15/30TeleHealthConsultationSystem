import React from 'react';

const AppointmentList = ({ appointments, markComplete }) => {
  return (
    <div>
      <h2>Scheduled Appointments</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <strong>Patient:</strong> {appointment.patientName} <br />
            <strong>Date:</strong> {appointment.date} <br />
            <strong>Time:</strong> {appointment.time} <br />
            <strong>Issue:</strong> {appointment.issue} <br />
            <strong>Status:</strong> {appointment.status} <br />
            {appointment.status === 'Scheduled' && (
              <button onClick={() => markComplete(index)}>Mark as Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
