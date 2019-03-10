export default [
  {
    id: 1,
    user_id: 1,
    identifier: 'test identifier',
    user: {
      data: {
        id: 1,
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
        id: 1,
        name: 'asthma'
      }]
    }
  },
  {
    id: 2,
    user_id: 2,
    identifier: 'test identifier',
    user: {
      data: {
        id: 2,
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
        id: 2,
        name: 'asthma'
      }]
    }
  },
  {
    id: 3,
    user_id: 3,
    identifier: 'test identifier',
    user: {
      data: {
        id: 3,
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
        id: 3,
        name: 'asthma'
      }]
    }
  }
];
