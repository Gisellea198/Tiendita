import { types } from "../type/type";

const reducerModal = (state = false, action) => {
  switch (action.type) {
    case types.showModal:
      return action.payload;
    default:
      return state;
  }
};

export { reducerModal };
