import { isEqual } from 'date-fns';
import Appoitment from '../models/Appointment';
import { EntityRepository, Repository } from 'typeorm';

class AppointmentsRepository {
  public findByDate(date: Date): Appoitment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
