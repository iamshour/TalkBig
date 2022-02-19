import { NOTIFY, AUTH, SIGN_OUT, STATS } from "./types"
import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:5000" })

API.interceptors.request.use((req) => {
	if (localStorage.getItem("user")) {
		req.headers.authorization = `Bearer ${
			JSON.parse(localStorage.getItem("user"))?.token
		}`
	}

	return req
})

export const signIn = async (dispatch, userData) => {
	try {
		dispatch({
			type: NOTIFY,
			payload: { loading: true },
		})
		const { data } = await API.post("/auth/login", userData)
		dispatch({
			type: AUTH,
			payload: data,
		})
		setTimeout(() => {
			dispatch({
				type: NOTIFY,
				payload: {
					loading: false,
					success: `Welcome back ${
						data.name.split(" ")[0].charAt(0).toUpperCase() +
						data.name.split(" ")[0].slice(1)
					}!`,
				},
			})
		}, 10)
		JSON.parse(localStorage.setItem("user", JSON.stringify(data)))
	} catch (error) {
		dispatch({
			type: NOTIFY,
			payload: { error: error?.response?.data?.msg },
		})
	}
}

export const signUp = async (dispatch, userData) => {
	try {
		dispatch({
			type: NOTIFY,
			payload: { loading: true },
		})
		const { data } = await API.post("/auth/register", userData)

		dispatch({
			type: AUTH,
			payload: data,
		})

		setTimeout(() => {
			dispatch({
				type: NOTIFY,
				payload: {
					error: "",
					loading: false,
					success: `Hello ${
						data?.name?.split(" ")[0]?.charAt(0)?.toUpperCase() +
						data?.name?.split(" ")[0]?.slice(1)
					}! Welcome to our platform!`,
				},
			})
		}, 10)
		JSON.parse(localStorage.setItem("user", JSON.stringify(data)))
	} catch (error) {
		dispatch({
			type: NOTIFY,
			payload: { loading: false, error: error?.response?.data?.msg },
		})
	}
}

export const getstats = async (dispatch) => {
	try {
		dispatch({
			type: NOTIFY,
			payload: { loading: true },
		})
		const { data } = await axios.get("/stats")
		dispatch({
			type: NOTIFY,
			payload: { loading: false },
		})

		dispatch({
			type: STATS,
			payload: data,
		})
	} catch (error) {
		if (error) {
			dispatch({
				type: NOTIFY,
				payload: { loading: false, error: error?.response?.data?.msg },
			})
		}
	}
}
