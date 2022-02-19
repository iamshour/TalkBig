import { NOTIFY, AUTH, SIGN_OUT, STATS } from "./types"

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
				user: payload,
			}

		case STATS:
			return {
				...state,
				stats: payload,
			}

		case SIGN_OUT:
			return {
				...state,
				user: {},
			}

		default:
			break
	}
}
