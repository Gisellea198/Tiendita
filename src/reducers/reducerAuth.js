import constants from "../helpers/constants";
import { types } from "../type/type";

const initialState = {
  id: 0,
  name: "Anonymous",
  isAuthenticated: false,
  imageUrl: constants.DEFAULT_AVATAR_IMAGES,
};

const reducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.displayName,
        imageUrl: action.payload.imageUrl,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case types.logout:
      return {
        id: initialState.id,
        name: initialState.name,
        imageUrl: initialState.imageUrl,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};

export { reducerAuth, initialState };
