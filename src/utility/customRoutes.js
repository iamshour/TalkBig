import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
	const authenticated = localStorage.getItem("user")

	return authenticated ? children : <Navigate to='/auth' />
}

export const PublicRoute = ({ children }) => {
	const authenticated = localStorage.getItem("user")

	return authenticated ? <Navigate to='/home' /> : children
}
