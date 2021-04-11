const INITIAL_STATE = {
  isInputVisible: false,

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INPUT_VISIBILITY':
      return {
        ...state,
        isInputVisible: !state.isInputVisible,
      };
    case 'DATE_ON_CLICK':
      return {
        ...state,
        dateClicked: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
