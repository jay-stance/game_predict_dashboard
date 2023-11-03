import axios from "../lib/axios"

export const adminLoginService = async({ email, password, username }) => {
    try {
        const res = await axios.post("/auth/admin-login", { username, email, password })
        return res.data
    } catch (error) {
        console.log("error signing in admin \b\b", error)
    }
}

export const resetPasswordService = async({ oldPassword, newPassword }) => {
    try {
        const res = await axios.post("/auth/admin-reset-password", { oldPassword, newPassword })
        return res.data
    } catch (error) {
        console.log("error resetting password \n\n", error)
    }
}