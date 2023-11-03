import axios from "../lib/axios"

export const getAllUsersService = async() => {
    try {
        const res = await axios.get("/users")
        return res.data
    } catch (error) {
        console.log("error getting all users \n\n")
    }
}