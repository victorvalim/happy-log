const INITIAL_STATE = {
  isInputVisible: false,
  currentData: {
    emoticon: '',
    text: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INPUT_VISIBILITY':
      return {
        ...state,
        isInputVisible: !state.isInputVisible,
      };
    case 'RESET_INPUT':
      return {
        ...state,
        currentData: {
          text: '',
          emoticon: '',
        },
      };
    case 'EMOTICON':
      return {
        ...state,
        currentData: { emoticon: action.payload },
      };
    case 'INPUT':
      return {
        ...state,
        currentData: { text: action.payload },
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
