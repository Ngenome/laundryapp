export const screenReducer = (state = "home", action) => {
  switch (action.type) {
    case "CHANGE_SCREEN":
      return action.payload;
    default:
      return state;
  }
};
export const UserReducer = (
  state = {
    logged: false,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        logged: true,
        username: action.payload.username,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        logged: false,
      };
    default:
      return state;
  }
};
