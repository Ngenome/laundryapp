export const screenReducer = (state = "home", action) => {
  switch (action.type) {
    case "CHANGE_SCREEN":
      return action.payload;
    default:
      return state;
  }
};
export const updateOrderScreenReducer = (state = "home", action) => {
  switch (action.type) {
    case "UPDATEORDERSCREEN":
      return action.payload;
    default:
      return state;
  }
};
export const DrawerScreenReducer = (state = "home", action) => {
  switch (action.type) {
    case "CHANGE_DRAWER_SCREEN":
      return action.payload;
    default:
      return state;
  }
};
export const UserReducer = (
  state = {
    loggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        username: action.payload.username,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export const ItemsReducer = (
  state = [
    // {
    //   id: 1,
    //   name: "T shirt Jangnam",
    //   cost: 77.7,
    //   color: "red",
    //   size: "small",
    //   image:
    //     "http://cdn.shopify.com/s/files/1/0928/3306/collections/ee7f59cb3d5d626153c4efcfa0c8c2de.jpg?v=1568798207",
    //   sign: "$",
    //   amount: 1,
    //   tax: 2.92,
    // },
    // {
    //   id: 2,
    //   name: "T shirt Jangnam",
    //   cost: 77.7,
    //   color: "red",
    //   size: "small",
    //   image:
    //     "https://hillcrestclothing.co.ke/wp-content/uploads/2021/02/ts3-5-300x300.png",
    //   sign: "$",
    //   amount: 1,
    //   tax: 2.92,
    // },
    // {
    //   id: 3,
    //   name: "Shirt",
    //   cost: 79.7,
    //   color: "oceanblue",
    //   size: "small",
    //   image:
    //     "https://i1.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/GILDAN-Solid-color-T-Shirt-Mens-Black-And-White-100-cotton-T-shirts-Summer-Skateboard-Tee-3.jpg?fit=800%2C800&ssl=1",
    //   sign: "$",
    //   amount: 1,
    //   tax: 2.92,
    // },
  ],
  action
) => {
  switch (action.type) {
    case "ADDITEM":
      state.push(action.payload);
      return state;
    case "REMOVEITEM":
      state.forEach((e, i) => {
        if (e.id == action.payload) {
          state.splice(i);
        }
      });
      return state;
    case "CHANGEITEM":
      state.forEach((e, i) => {
        if (e.id == action.payload.id) {
          state[i][action.payload.item] = action.payload.value;
        }
      });
      return state;
    default:
      return state;
  }
};

export const LaundryCartReducer = (
  state = [
    {
      id: 1,
      ServiceName: "Wash and Fold",
      clothes: [
        { id: 1, name: "shirt", amount: 3, cost: 2.43 },
        { id: 2, name: "Suit", amount: 4, cost: 9.44 },
        { id: 3, name: "Blazer", amount: 3, cost: 7.24 },
      ],
    },
    {
      id: 2,
      ServiceName: "Iron and Fold",
      clothes: [
        { id: 1, name: "shirt", amount: 3, cost: 2.43 },
        { id: 2, name: "Suit", amount: 4, cost: 9.44 },
        { id: 3, name: "Blazer", amount: 3, cost: 7.24 },
      ],
    },
  ],
  action
) => {
  switch (action.type) {
    case "ADDLAUNDRYITEM":
      state.push(action.payload);
      return state;
    case "REMOVELAUNDRYITEM":
      state.forEach((e, i) => {
        if (e.id == action.payload) {
          state.splice(i);
        }
      });
    case "CHANGELAUNDRYITEM":
      state.forEach((e, i) => {
        if (e.id == action.payload.id) {
          state[i][action.payload.item] = action.payload.value;
        }
      });
      return state;
    default:
      return state;
  }
};

export const NextScreenReducer = (state = "landing", action) => {
  switch (action.type) {
    case "SETNEXTSCREEN":
      return action.payload;
    default:
      return state;
  }
};
