import axios from "../lib/axios"

export const createTeamService = async({ name, logo }) => {
    try {
        const res = await axios.post("/team", { name, logo })
        return res.data
    } catch (error) {
        console.log("error creating team \b\b", error)
    }
}

export const getAllTeamsService = async() => {
    try {
        const res = await axios.get("/team")
        return res.data
    } catch (error) {
        console.log("error getting all teams \b\b", error)
    }
}