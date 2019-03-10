import axios from 'axios';
import patientsFixture from '../../fixtures/patients';
import * as patients from '../../../src/agents/patients';

jest.mock('axios');

beforeEach(() => {
  jest.resetModules();
  axios.get.mockReturnValue({ data: { data: patientsFixture } });
});

describe('patients agent', () => {
  it('does not search if no search parameter is provided', async () => {
    await patients.get({});

    expect(axios.get).not.toHaveBeenCalled();
  });

  it('does not search if only the sex is provided', async () => {
    await patients.get({ sex: 'male' });

    expect(axios.get).not.toHaveBeenCalled();
  });

  it('retrieves a list of users', async () => {
    axios.get.mockReturnValue({ data: { data: [patientsFixture[0]] } });

    const patientsResult = await patients.get({ firstName: 'Cristiano', lastName: 'Ronaldo' });

    expect(axios.get)
      .toHaveBeenCalledWith(`${process.env.BACKEND_URL}/patients?first_name=Cristiano&last_name=Ronaldo`);
    expect(patientsResult).toEqual([patientsFixture[0]])
  });

  it('updates a single patient', async () => {
    axios.put.mockReturnValue({ data: { data: patientsFixture[0] } });

    await patients.update(patientsFixture[0]);

    expect(axios.put)
      .toHaveBeenCalledWith(
        `${process.env.BACKEND_URL}/patients/${patientsFixture[0].identifier}`,
        patientsFixture[0]
      );
  });
});
