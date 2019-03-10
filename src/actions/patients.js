import * as patients from '../agents/patients';

export const updatePatients = patients => ({
  type: 'UPDATE_PATIENTS',
  patients
});

export const startUpdatePatients = function ({ firstName = '', lastName = '', identifier = '', sex = '' }) {
  return async function (dispatch) {
    dispatch(startPatientSearch());
    const patientsResult = await patients.get({ firstName, lastName, identifier, sex });
    dispatch(updatePatients(patientsResult));
    dispatch(finishPatientSearch());
  };
};

export const startPatientSearch = () => ({
  type: 'START_PATIENT_SEARCH'
});

export const finishPatientSearch = () => ({
  type: 'FINISH_PATIENT_SEARCH'
});

export const updatePatient = patient => async dispatch => {
  await patients.update(patient);
};
