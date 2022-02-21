import { useLocation } from "react-router-dom"
import Navbar from "./navbar"
import Theme from "./theme"

export default function Header() {
	const location = useLocation()
	const notAuthPage = location.pathname !== "/" ? true : false
	return (
		<header style={!notAuthPage ? { justifyContent: "flex-end" } : {}}>
			{notAuthPage && <Navbar />}
			<Theme />
		</header>
	)
}
