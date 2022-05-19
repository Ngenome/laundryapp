export const ServicesReducer = (state = {}, action) => {
  switch (action.type) {
    // case "ADDSERVICEITEM":
    //   return ({ ...state }[action.payload.service][action.payload.item] =
    //     action.payload.value);
    case "ADDSERVICE":
      var new_state = { ...state };
      new_state[action.payload.service] = action.payload.value;
      return new_state;
    default:
      return state;
  }
};
