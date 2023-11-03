import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false,
    user: null,
    token: null
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoggedIn: (state, action) => {
            state.loggedIn = action.payload.loggedIn;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logOut: (state, action) => {
            state.loggedIn = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const { setLoggedIn, logOut } = userSlice.actions;

export default userSlice.reducer;