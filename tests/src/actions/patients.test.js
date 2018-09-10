import patientsFixture from '../../fixtures/patients';
import { updatePatients } from '../../../src/actions/patients';

describe('patients actions', () => {
  it('sets up the update patients object', () => {
    const expectedAction = {
      type: 'UPDATE_PATIENTS',
      patients: patientsFixture
    };
    expect(updatePatients(patientsFixture)).toEqual(expectedAction);
  });
});
