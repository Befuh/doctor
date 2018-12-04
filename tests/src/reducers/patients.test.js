import patientsFixture from '../../fixtures/patients';
import patientsReducer from '../../../src/reducers/patients'

describe('patients reducers', () => {
  it('sets the default state', () => {
    const state = patientsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({ list: [], searching: false });
  });

  it('updates the list of patients', () => {
    const action = {
      type: 'UPDATE_PATIENTS',
      patients: patientsFixture
    };
    const state = patientsReducer(undefined, action);
    expect(state.patients).toEqual(patientsFixture);
  });

  it('starts patient search', () => {
    const action = { type: 'START_PATIENT_SEARCH' };
    const state = patientsReducer(undefined, action);
    expect(state.searching).toBe(true);
  });

  it('finishes patient search', () => {
    const action = { type: 'FINISH_PATIENT_SEARCH' };
    const state = patientsReducer({ searching: true }, action);
    expect(state.searching).toBe(false);
  });
});
