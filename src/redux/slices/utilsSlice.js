import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    notificationCount: 3,
};

const utilsSlice = createSlice({
    name: "utils",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setNotificationCount: (state, action) => {
            state.notificationCount = action.payload;
        },
    },
});

export const { setLoading, setNotificationCount } = utilsSlice.actions;

export default utilsSlice.reducer;