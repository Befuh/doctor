export default [
  {
    id: expect.any(Number),
    user_id: expect.any(Number),
    identifier: 'test identifier',
    user: {
      data: {
        id: expect.any(Number),
        first_name: 'Cristian',
        last_name: 'Ronaldo',
        date_of_birth: '1980-01-15',
        sex: 'male'
      }
    },
    address: {
      data: {
        street: 'Street',
        house_number: '14B',
        zipcode: '34352-B',
        city: 'Bamenda',
        country: 'CM'
      }
    },
    pre_existing_conditions: {
      data: [{
        id: expect.any(Number),
        name: 'asthma'
      }]
    }
  },
  {
    id: expect.any(Number),
    user_id: expect.any(Number),
    identifier: 'test identifier',
    user: {
      data: {
        id: expect.any(Number),
        first_name: 'Lionel',
        last_name: 'Messi',
        date_of_birth: '1980-01-15',
        sex: 'male'
      }
    },
    address: {
      data: {
        street: 'Street',
        house_number: '14B',
        zipcode: '34352-B',
        city: 'Bamenda',
        country: 'CM'
      }
    },
    pre_existing_conditions: {
      data: [{
        id: expect.any(Number),
        name: 'asthma'
      }]
    }
  },
  {
    id: expect.any(Number),
    user_id: expect.any(Number),
    identifier: 'test identifier',
    user: {
      data: {
        id: expect.any(Number),
        first_name: 'Marta',
        last_name: 'Vieira da Silva',
        date_of_birth: '1980-01-15',
        sex: 'female'
      }
    },
    address: {
      data: {
        street: 'Street',
        house_number: '14B',
        zipcode: '34352-B',
        city: 'Bamenda',
        country: 'CM'
      }
    },
    pre_existing_conditions: {
      data: [{
        id: expect.any(Number),
        name: 'asthma'
      }]
    }
  }
];
