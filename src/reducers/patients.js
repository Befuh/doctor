const defaultState = {
  list: [],
  searching: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_PATIENTS':
      const { patients } = action;
      return { ...state, patients };
    case 'START_PATIENT_SEARCH':
      return { ...state, searching: true };
    case 'FINISH_PATIENT_SEARCH':
      return { ...state, searching: false };
    default:
      return state;
  }
};
