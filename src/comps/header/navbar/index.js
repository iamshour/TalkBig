import { useState } from "react"
import { GoHome } from "react-icons/go"
import { AiOutlineUser } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import { BsInfoCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { Logo } from "utility"

export default function Navbar() {
	const navigate = useNavigate()
	const [navActive, setNavActive] = useState(false)

	const switcherClass = () => {
		return navActive ? "nav-active" : ""
	}

	const handleBackdropClose = (e) => {
		if (e.target.classList.contains("nav-backdrop")) {
			setNavActive(false)
		}
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
								className='nav-row'
								key={index}
								onClick={() => {
									setNavActive(false)
									if (item.title.startsWith("Sign Out")) {
										console.log("open Modal")
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
