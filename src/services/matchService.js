import axios from "../lib/axios"

export const createMatchService = async({ homeTeam, awayTeam, homeScore, awayScore, matchTime, matchDate, isvip }) => {
    try {
        const res = await axios.post("/match", { homeTeam, awayTeam, homeScore, awayScore, matchTime, matchDate, isvip })
        return res.data
    } catch (error) {
        console.log("error creating match \b\b", error)
    }
}

export const getAllMatchesService = async() => {
    try {
        const res = await axios.get("/match")
        return res.data
    } catch (error) {
        console.log("error getting all match \b\b", error)
    }
}

export const getMatchByIdService = async(id) => {
    try {
        const res = await axios.get(`/match/${id}`)
        return res.data
    } catch (error) {
        console.log("error getting match by id \b\b", error)
    }
}