import * as patients from '../agents/patients';

export const updateList = patients => ({
  type: 'UPDATE_PATIENTS',
  patients
});

export const startUpdateList = function ({ firstName = '', lastName = '', identifier = '', sex = '' }) {
  return async function (dispatch) {
    dispatch(startSearch());
    const patientsResult = await patients.get({ firstName, lastName, identifier, sex });
    dispatch(updateList(patientsResult));
    dispatch(finishSearch());
  };
};

export const startSearch = () => ({
  type: 'START_PATIENT_SEARCH'
});

export const finishSearch = () => ({
  type: 'FINISH_PATIENT_SEARCH'
});

export const update = patient => async dispatch => {
  await patients.update(patient);
};
