import Chat from "comps/home/Chat"
import Graph from "comps/home/Graph"
import { GlobalContext } from "context/globalContext"
import { NOTIFY } from "context/types"
import Lottie from "lottie-web-light"
import { useContext, useEffect, useState } from "react"
import { BsPatchCheck } from "react-icons/bs"
import { IoMailOpenOutline } from "react-icons/io5"
import LottieSvg1 from "temp/connect.json"
import { handLeft, handRight } from "utility"

export default function Home() {
	const textList = [
		{ text: "Live-chat omnichannel web or app integration!" },
		{
			text: "Build custom chatbots integrate it's superpowers for user's websites or via their social media accounts!",
		},
		{ text: "Code-free tools to implement advanced web messaging software!" },
		{ text: "Keep everyone happy!!" },
	]

	const [{ notify }, dispatch] = useContext(GlobalContext)

	const [offSetY, setOffsetY] = useState(0)

	const handleScolling = () => {
		setOffsetY(window.pageYOffset)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScolling)

		return () => window.removeEventListener("scroll", handleScolling)
	}, [])

	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector("#lottie-svg-1"),
			animationData: LottieSvg1,
			renderer: "svg",
			loop: true,
			autoplay: true,
		})
	}, [])

	const handleKeyDown = (e) => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault()

			setTimeout(() => {
				dispatch({
					type: NOTIFY,
					payload: {
						success: "Thanks for subscribing! We Will contact you very shortly!",
					},
				})
			}, 1000)
			e.target.value = ""
		}
	}

	return (
		<div>
			<div className='home-page'>
				<div className='hero-container'>
					<section className='top-section'>
						<div className='text'>
							<h1>
								<span>Connecting</span>
								<br /> businesses &amp; clients is our game!
							</h1>
						</div>
						<div id='lottie-svg-1' />
					</section>
					<div className='hands-section'>
						<img
							src={handLeft}
							alt='handle of a robot'
							style={{ transform: `translateX(-${offSetY * 0.2}px)` }}
						/>
						<img
							src={handRight}
							alt='handle of a person'
							style={{ transform: `translateX(${offSetY * 0.2}px)` }}
						/>
					</div>
				</div>
				<section className='middle-section'>
					<div className='text'>
						<h1>Some of our favorite services!</h1>
						<div className='list-container'>
							{textList.map((item, index) => (
								<div
									className='row'
									key={index}
									style={{ animationDelay: `${index / 2}s` }}>
									<div className='icon'>
										<BsPatchCheck />
									</div>
									<p>{item.text}</p>
								</div>
							))}
						</div>
					</div>
					<section className='graph'>
						<Graph />
					</section>
				</section>
				<div className='bottom-section'>
					<h1>Subscribe to our newsletter &amp; stay tuned!</h1>
					<div className='input-bar-icon'>
						<IoMailOpenOutline className='icon' />
						<input type='text' placeholder='Subscribe' onKeyDown={handleKeyDown} />
					</div>
				</div>
				<Chat />
			</div>
		</div>
	)
}
