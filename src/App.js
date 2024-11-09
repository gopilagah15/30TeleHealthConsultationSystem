import React, { useState } from 'react'; 
import ConsultationForm from './components/ConsultationForm';
import AppointmentList from './components/AppointmentList';
import Alerts from './components/Alerts';
import Summary from './components/Summary';
import Reports from './components/Reports';

const App = () => {
  const [appointments, setAppointments] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const scheduleAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
    setAlerts([...alerts, { message: 'Appointment scheduled', type: 'info' }]);
  };

  const markComplete = (index) => {
    const updatedAppointments = appointments.map((appointment, i) =>
      i === index ? { ...appointment, status: 'Completed' } : appointment
    );
    setAppointments(updatedAppointments);
    setAlerts([...alerts, { message: 'Consultation completed', type: 'success' }]);
  };

  return (
    <div>
      <h1>Telehealth Consultation System</h1>
      <ConsultationForm scheduleAppointment={scheduleAppointment} />
      <AppointmentList appointments={appointments} markComplete={markComplete} />
      <Alerts alerts={alerts} />
      <Summary appointments={appointments} />
      <Reports appointments={appointments} />
    </div>
  );
};

export default App;
