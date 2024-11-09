import React, { useState } from 'react';

const ConsultationForm = ({ scheduleAppointment }) => {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    scheduleAppointment({ patientName, date, time, issue, status: 'Scheduled' });
    setPatientName('');
    setDate('');
    setTime('');
    setIssue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Schedule Consultation</h2>
      <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <textarea placeholder="Issue Details" value={issue} onChange={(e) => setIssue(e.target.value)} required />
      <button type="submit">Schedule Appointment</button>
    </form>
  );
};

export default ConsultationForm;
