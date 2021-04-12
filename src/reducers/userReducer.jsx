const INITIAL_STATE = {
  isInputVisible: false,
  currentData: {
    emoticon: '',
    text: '',
  },
  data: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INPUT_VISIBILITY':
      return {
        ...state,
        isInputVisible: !state.isInputVisible,
      };

    case 'ADD_INPUT':
      return {
        ...state,
        data: [...state.data, {
          text: state.currentData.text,
          emoticon: state.currentData.emoticon,
          date: state.dateClicked,
        }],
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
        currentData: {
          ...state.currentData,
          emoticon: action.payload,
        },
      };
    case 'INPUT':
      return {
        ...state,
        currentData: {
          ...state.currentData,
          text: action.payload,
        },
      };
    // case 'INPUT_DATE':
    //   return {
    //     ...state,
    //     currentData: {
    //       ...state.currentData,
    //       date: action.payload,
    //     },
    //   };
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
