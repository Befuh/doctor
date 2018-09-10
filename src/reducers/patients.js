const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_PATIENTS':
      return action.patients;
    default:
      return state;
  }
};
