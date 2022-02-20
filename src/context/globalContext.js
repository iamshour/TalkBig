import { createContext, useReducer } from "react"
import { reducer } from "./reducer"

export const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {
	const initialState = {
		userId: {},
		userInfo: {},
		notify: {},
		stats: [],
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>
	)
}

export default GlobalProvider
