import { types } from "../type/type";

const reducerUser = (state = {}, action) => {
  switch (action.type) {
    case types.getProfile:
      return action.payload;
    default:
      return state;
  }
};
const reducerUsers = (state = [], action) => {
  switch (action.type) {
    case types.lastProfiles:
      return action.payload;
    default:
      return state;
  }
};
export { reducerUser, reducerUsers };
