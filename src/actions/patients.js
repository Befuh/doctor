import { get as getPatients } from '../agents/patients';

export const updatePatients = patients => ({
  type: 'UPDATE_PATIENTS',
  patients
});

export const startUpdatePatients = ({ firstName = '', lastName = '', identifier = '', sex = '' }) =>
  async dispatch => {
    const patients = await getPatients({ firstName, lastName, identifier, sex });
    dispatch(updatePatients(patients));
  };
