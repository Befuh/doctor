import axios from 'axios';
import dotenv from 'dotenv';
import patientsFixture from '../../fixtures/patients';
import { get as getPatients } from '../../../src/agents/patients';

dotenv.config();

beforeEach(() => {
  axios.get = jest.fn();
  axios.get.mockReturnValue({ data: { data: patientsFixture } });
});

describe('patients agent', () => {
  it('does nothing if no search parameter is provided', async () => {
    await getPatients({});

    expect(axios.get).not.toHaveBeenCalled();
  });

  it('does nothing if only the sex is provided', async () => {
    await getPatients({ sex: 'male' });

    expect(axios.get).not.toHaveBeenCalled();
  });

  it('retrieves a list of users', async () => {
    axios.get.mockReturnValue({ data: { data: [patientsFixture[0]] } });

    const patients = await getPatients({ firstName: 'Cristiano', lastName: 'Ronaldo' });

    expect(axios.get)
      .toHaveBeenCalledWith(`${process.env.BACKEND_URL}/patients?first_name=Cristiano&last_name=Ronaldo`);
    expect(patients).toEqual([patientsFixture[0]])
  });
});
