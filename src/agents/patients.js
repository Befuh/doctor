import axios from 'axios';

export const get = async ({ firstName = '', lastName = '', identifier = '', sex = '' }) => {
  if (!firstName && !lastName && !identifier) {
    return;
  }

  let queryParameters = [];
  if (firstName) {
    queryParameters = [...queryParameters, `first_name=${firstName}`];
  }
  if (lastName) {
    queryParameters = [...queryParameters, `last_name=${lastName}`];
  }
  if (identifier) {
    queryParameters = [...queryParameters, `identifier=${identifier}`];
  }
  if (sex) {
    queryParameters = [...queryParameters, `sex=${sex}`];
  }
  const query = queryParameters.join('&');
  const response = await axios.get(`${process.env.BACKEND_URL}/patients?${query}`);

  return response.data.data;
};

export const update = async patient => {
  let url = `${process.env.BACKEND_URL}/patients/${patient.identifier}`;
  const response = await axios.put(url, patient);

  return response.data.data;
};
