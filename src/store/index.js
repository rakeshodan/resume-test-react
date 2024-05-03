import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user/userSlice";

const reducers = {
  user: userReducer,
};

export const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
