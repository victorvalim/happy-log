const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };

    default:
      return state;
  }
};

export default userReducer;
