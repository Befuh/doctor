import patientsFixture from '../../fixtures/patients';
import patientsReducer from '../../../src/reducers/patients'

describe('patients reducers', () => {
  it('sets the default state', () => {
    const state = patientsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
  });

  it('updates the list of patients', () => {
    const action = {
      type: 'UPDATE_PATIENTS',
      patients: patientsFixture
    };
    const state = patientsReducer([], action);
    expect(state).toEqual(patientsFixture);
  });
});
