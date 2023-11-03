import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import utilsSlice from "./slices/utilsSlice";

const reducers = combineReducers({
    user: userSlice,
    utils: utilsSlice,
});

export const store = configureStore({ reducer: reducers });