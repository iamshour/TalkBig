import lottie from "lottie-web-light"
import { useEffect } from "react"
import { BsChatRightText } from "react-icons/bs"
import botSvg from "temp/bot2d.json"

export default function Bot({ setOpen }) {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#bot-svg"),
			animationData: botSvg,
			renderer: "svg",
			loop: true,
			autoplay: true,
		})
	}, [])

	return (
		<div className='btn-container'>
			<BsChatRightText className='icon' />
			<button onClick={() => setOpen(true)}>
				<div id='bot-svg' />
				<p>Chat with our bot!</p>
			</button>
		</div>
	)
}
