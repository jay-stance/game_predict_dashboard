import axios from "axios";
import { toast } from "react-toastify";

import { store } from "../redux/store";
import { setLoading } from "../redux/slices/utilsSlice";

export const baseURL = process.env.REACT_APP_baseURL;

console.log("base url is \n\n", baseURL)

const instance = axios.create({
    baseURL,
});

instance.interceptors.request.use(
    async(config) => {
        store.dispatch(setLoading(true));
        const token = store.getState().user.token;
        if (token) config.headers["Authorization"] = token;
        config.headers["Content-Type"] = "application/json";
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
    null, { synchronous: true }
);

instance.interceptors.response.use(
    function(response) {
        store.dispatch(setLoading(false));
        return response;
    },
    function(error) {
        store.dispatch(setLoading(false));
        if (error.response.status) {
            if (error.response.status === 401) {
                localStorage.removeItem("x_auth");
                window.location.href = "/";
            } else if (error.response.status === 403) {
                toast.error("You are not authorized to perform this action");
            } else if (error.response.status === 400) {
                toast.error(error.response.data.error);
            } else if (error.response.status === 500) {
                toast.error("Internal server error");
            }
        }
        return Promise.reject(error);
    }
);

export default instance;