import { NOTIFY, AUTH, SIGN_OUT, STATS, PROFILE, UPDATE } from "./types"

export const reducer = (state, { type, payload }) => {
	switch (type) {
		case NOTIFY:
			return {
				...state,
				notify: payload,
			}
		case AUTH:
			return {
				...state,
				userId: payload,
			}
		case STATS:
			return {
				...state,
				stats: payload,
			}

		case PROFILE:
			return {
				...state,
				userInfo: payload,
			}
		case UPDATE:
			return {
				...state,
				userInfo: payload,
			}

		case SIGN_OUT:
			return {
				...state,
				userInfo: {},
				userId: {},
			}

		default:
			break
	}
}
