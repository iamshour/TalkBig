import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Logo } from "utility"
import { signOut } from "context/actions"
import { GlobalContext } from "context/globalContext"
import decode from "jwt-decode"
//ICONS
import { GoHome } from "react-icons/go"
import { AiOutlineUser } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import { BsInfoCircle } from "react-icons/bs"

export default function Navbar() {
	const navigate = useNavigate()
	const location = useLocation()
	const [navActive, setNavActive] = useState(false)

	const [state, dispatch] = useContext(GlobalContext)

	useEffect(() => {
		const token = JSON.parse(localStorage.getItem("user"))?.token

		if (token) {
			const decodedToken = decode(token)

			if (decodedToken.exp * 1000 < new Date().getTime()) {
				signOut(dispatch, "Your Session has expired! Please sign in again!")
				navigate("/")
			}
		}
	}, [dispatch, navigate])

	const switcherClass = () => {
		return navActive ? "nav-active" : ""
	}

	const handleBackdropClose = (e) => {
		if (e.target.classList.contains("nav-backdrop")) {
			setNavActive(false)
		}
	}

	const routeLocation = (route) => {
		return location.pathname === route ? "active-route" : ""
	}

	const navList = [
		{ title: "Home", icon: <GoHome className='icon' />, link: "/home" },
		{ title: "Profile", icon: <AiOutlineUser className='icon' />, link: "/profile" },
		{ title: "About", icon: <BsInfoCircle className='icon' />, link: "/about" },
		{ title: "Sign Out", icon: <FiLogOut className='icon' />, link: null },
	]
	return (
		<>
			<button
				className={`nav-btn ${switcherClass()}`}
				onClick={() => setNavActive((prev) => !prev)}>
				<span />
				<span />
				<span />
			</button>
			<div className={`nav-backdrop ${switcherClass()}`} onClick={handleBackdropClose}>
				<nav>
					<div className='nav-links'>
						{navList.map((item, index) => (
							<button
								className={`nav-row ${routeLocation(item.link)}`}
								key={index}
								onClick={() => {
									setNavActive(false)
									if (item.title.startsWith("Sign Out", "Signed Out successfully!")) {
										signOut(dispatch)
										navigate("/")
									} else {
										navigate(item.link)
									}
								}}>
								{item.icon}
								<h1>{item.title}</h1>
							</button>
						))}
					</div>
					<div className='img-wrapper'>{Logo()}</div>
				</nav>
			</div>
		</>
	)
}
