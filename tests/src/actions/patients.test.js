import patientsFixture from '../../fixtures/patients';
import * as patients from '../../../src/agents/patients';
import {
  finishPatientSearch,
  startPatientSearch,
  startUpdatePatients,
  updatePatients
} from '../../../src/actions/patients';

let dispatch;
beforeEach(() => {
  patients.get = jest.fn(() => ([patientsFixture[0]]));
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
    await startUpdatePatients({ firstName: 'Cristiano' })(dispatch);

    expect(patients.get).toHaveBeenCalledWith({ firstName: 'Cristiano', lastName: '', identifier: '', sex: '' });
    expect(dispatch).toHaveBeenCalledWith(updatePatients([patientsFixture[0]]));
  });

  it('starts the patient search action', () => {
    expect(startPatientSearch()).toEqual({ type: 'START_PATIENT_SEARCH' });
  });

  it('finishes the patient search action', () => {
    expect(finishPatientSearch()).toEqual({ type: 'FINISH_PATIENT_SEARCH' });
  });
});
