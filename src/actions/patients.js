import { get as getPatients } from '../agents/patients';

export const updatePatients = patients => ({
  type: 'UPDATE_PATIENTS',
  patients
});

export const startUpdatePatients = ({ firstName = '', lastName = '', identifier = '', sex = '' }) => async dispatch => {
  const patients = await getPatients({ firstName, lastName, identifier, sex });
  dispatch(updatePatients(patients));
};

export const startPatientSearch = () => ({
  type: 'START_PATIENT_SEARCH'
});

export const finishPatientSearch = () => ({
  type: 'FINISH_PATIENT_SEARCH'
});
