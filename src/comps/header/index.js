import { useLocation } from "react-router-dom"
import Navbar from "./navbar"
import Theme from "./theme"

export default function Header() {
	const location = useLocation()
	const isAuthPage = location.pathname.startsWith("/") ? true : false
	return (
		<header>
			{!isAuthPage && <Navbar />}
			<Theme />
		</header>
	)
}
