import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducerAuth } from "../reducers/reducerAuth";
import thunk from "redux-thunk";
import { reducerUser, reducerUsers } from "../reducers/reducerUser";
import { reducerModal } from "../reducers/reducerModal";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: reducerAuth,
  user: reducerUser,
  users: reducerUsers,
  modal: reducerModal,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
