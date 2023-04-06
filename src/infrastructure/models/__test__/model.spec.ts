import {
  AppointmentMongo,
  ScheduleMongo,
} from '@medical/infrastructure/persistence/database/mongo/schemas';
import { DoctorMongo } from '@medical/infrastructure/persistence/database/mongo/schemas/doctor.schema';
import { AppointmentModel } from '../appointment.model';
import { DoctorModel } from '../doctor.model';
import { ScheduleModel } from '../ingredient.model';

describe('AppointmentModel', () => {
  let appointmentModel: AppointmentModel;

  beforeEach(() => {
    appointmentModel = new AppointmentModel();
  });

  it('should inherit from AppointmentMongo', () => {
    // Arrange
    const expectedSchemaName = 'AppointmentModel';

    // Act
    const schemaName = appointmentModel.constructor.name;

    // Assert
    expect(schemaName).toBe(expectedSchemaName);
    expect(appointmentModel).toBeInstanceOf(AppointmentMongo);
  });
});

describe('DoctorModel', () => {
  let doctorModel: DoctorModel;

  beforeEach(() => {
    doctorModel = new DoctorModel();
  });

  it('should inherit from DoctorMongo', () => {
    // Arrange
    const expectedSchemaName = 'DoctorModel';

    // Act
    const schemaName = doctorModel.constructor.name;

    // Assert
    expect(schemaName).toBe(expectedSchemaName);
    expect(doctorModel).toBeInstanceOf(DoctorMongo);
  });
});

describe('ScheduleModel', () => {
  let scheduleModel: ScheduleModel;

  beforeEach(() => {
    scheduleModel = new ScheduleModel();
  });

  it('should inherit from ScheduleMongo', () => {
    // Arrange
    const expectedSchemaName = 'ScheduleModel';

    // Act
    const schemaName = scheduleModel.constructor.name;

    // Assert
    expect(schemaName).toBe(expectedSchemaName);
    expect(scheduleModel).toBeInstanceOf(ScheduleMongo);
  });
});
