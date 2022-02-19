import lottie from "lottie-web-light"
import { useEffect } from "react"
import reactLogo from "temp/bot3d.json"

export default function ChatBot() {
	useEffect(() => {
		lottie.loadAnimation({
			container: document.querySelector("#react-logo"),
			animationData: reactLogo,
			renderer: "svg", // "canvas", "html"
			loop: true, // boolean
			autoplay: true, // boolean
		})
	}, [])

	return (
		<div className='chatbot-container'>
			<div id='react-logo' style={{ width: 200, height: 200 }} />
		</div>
	)
}
