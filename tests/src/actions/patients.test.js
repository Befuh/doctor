import patientsFixture from '../../fixtures/patients';
import * as patients from '../../../src/actions/patients';
import * as patientsAgent from '../../../src/agents/patients';

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
    expect(patients.updateList(patientsFixture)).toEqual(expectedAction);
  });

  it('updates patients asynchronously', async () => {
    patientsAgent.get.mockReturnValue([patientsFixture[0]]);

    await patients.startUpdateList({ firstName: 'Cristiano' })(dispatch);

    expect(patientsAgent.get).toHaveBeenCalledWith({ firstName: 'Cristiano', lastName: '', identifier: '', sex: '' });
    expect(dispatch).toHaveBeenCalledWith(patients.startSearch());
    expect(dispatch).toHaveBeenCalledWith(patients.updateList([patientsFixture[0]]));
    expect(dispatch).toHaveBeenCalledWith(patients.finishSearch());
  });

  it('starts the patient search action', () => {
    expect(patients.startSearch()).toEqual({ type: 'START_PATIENT_SEARCH' });
  });

  it('finishes the patient search action', () => {
    expect(patients.finishSearch()).toEqual({ type: 'FINISH_PATIENT_SEARCH' });
  });

  it('updates a patient', async () => {
    patientsAgent.update.mockReturnValue(patientsFixture[0]);

    await patients.update(patientsFixture[0])(dispatch);

    expect(patientsAgent.update).toHaveBeenCalledWith(patientsFixture[0]);
  });
});
