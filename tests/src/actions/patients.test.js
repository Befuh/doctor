import patientsFixture from '../../fixtures/patients';
import * as patients from '../../../src/agents/patients';
import {
  finishPatientSearch,
  startPatientSearch,
  startUpdatePatients,
  updatePatient,
  updatePatients
} from '../../../src/actions/patients';

jest.mock('../../../src/agents/patients');

let dispatch;
beforeEach(() => {
  jest.resetModules();
  dispatch = jest.fn();
});

describe('patients actions', () => {
  it('sets up the update patients object', () => {
    const expectedAction = {
      type: 'UPDATE_PATIENTS',
      patients: patientsFixture
    };
    expect(updatePatients(patientsFixture)).toEqual(expectedAction);
  });

  it('updates patients asynchronously', async () => {
    patients.get.mockReturnValue([patientsFixture[0]]);

    await startUpdatePatients({ firstName: 'Cristiano' })(dispatch);

    expect(patients.get).toHaveBeenCalledWith({ firstName: 'Cristiano', lastName: '', identifier: '', sex: '' });
    expect(dispatch).toHaveBeenCalledWith(startPatientSearch());
    expect(dispatch).toHaveBeenCalledWith(updatePatients([patientsFixture[0]]));
    expect(dispatch).toHaveBeenCalledWith(finishPatientSearch());
  });

  it('starts the patient search action', () => {
    expect(startPatientSearch()).toEqual({ type: 'START_PATIENT_SEARCH' });
  });

  it('finishes the patient search action', () => {
    expect(finishPatientSearch()).toEqual({ type: 'FINISH_PATIENT_SEARCH' });
  });

  it('updates a patient', async () => {
    patients.update.mockReturnValue(patientsFixture[0]);

    await updatePatient(patientsFixture[0])(dispatch);

    expect(patients.update).toHaveBeenCalledWith(patientsFixture[0]);
  });
});
