import { NOTIFY, AUTH, SIGN_OUT, STATS, PROFILE, UPDATE } from "./types"
import axios from "axios"

// const API = axios.create({
// 	baseURL: "http://localhost:5000/",
// 	withCredentials: false,
// 	headers: {
// 		"Access-Control-Allow-Origin": "*",
// 		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
// 	},
// })

const API = axios.create({
	baseURL: "https://talkbig.herokuapp.com/",
	withCredentials: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
})

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
		const { data } = await API.post("auth/login", userData)
		dispatch({
			type: AUTH,
			payload: data,
		})
		setTimeout(() => {
			dispatch({
				type: NOTIFY,
				payload: {
					loading: false,
					success: data.msg,
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
		const { data } = await API.post("auth/register", userData)

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
					success: data.msg,
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
		const { data } = await API.get("stats")
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

export const signOut = async (dispatch, message) => {
	try {
		dispatch({
			type: NOTIFY,
			payload: { loading: true },
		})
		dispatch({
			type: SIGN_OUT,
		})
		setTimeout(() => {
			dispatch({
				type: NOTIFY,
				payload: {
					loading: false,
					success: message,
				},
			})
		}, 10)
		localStorage.removeItem("user")
	} catch (error) {
		dispatch({
			type: NOTIFY,
			payload: { error: error },
		})
	}
}

export const viewProfile = async (dispatch, userId) => {
	try {
		const { data } = await API.get(`users/${userId}`)
		dispatch({
			type: PROFILE,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: NOTIFY,
			payload: { error: error?.response?.data?.msg },
		})
	}
}

export const updateProfile = async (dispatch, userId, userData) => {
	try {
		dispatch({
			type: NOTIFY,
			payload: { loading: true },
		})
		const { data } = await API.put(`users/profile/${userId}`, userData)
		dispatch({
			type: UPDATE,
			payload: data,
		})
		setTimeout(() => {
			dispatch({
				type: NOTIFY,
				payload: {
					loading: false,
					success: data.msg,
				},
			})
		}, 10)
	} catch (error) {
		dispatch({
			type: NOTIFY,
			payload: { error: error?.response?.data?.msg },
		})
	}
}

export const updatePass = async (dispatch, userId, userData) => {
	try {
		dispatch({
			type: NOTIFY,
			payload: { loading: true },
		})
		const { data } = await API.put(`users/password/${userId}`, userData)
		setTimeout(() => {
			dispatch({
				type: NOTIFY,
				payload: {
					loading: false,
					success: data.msg,
				},
			})
		}, 10)
	} catch (error) {
		dispatch({
			type: NOTIFY,
			payload: { error: error?.response?.data?.msg },
		})
	}
}
