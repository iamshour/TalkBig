import Lottie from "lottie-web-light"
import { useEffect } from "react"
import ess from "temp/increase.json"
import Objective from "temp/objective.json"
import question from "temp/question.json"

export default function About() {
	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector("#svg1"),
			animationData: question,
			renderer: "svg",
			loop: true,
			autoplay: true,
		})
		Lottie.loadAnimation({
			container: document.querySelector("#svg2"),
			animationData: ess,
			renderer: "svg",
			loop: true,
			autoplay: true,
		})
		Lottie.loadAnimation({
			container: document.querySelector("#svg3"),
			animationData: Objective,
			renderer: "svg",
			loop: true,
			autoplay: true,
		})
	}, [])

	return (
		<div>
			<div className='about-page'>
				<div className='sec-1'>
					<div id='svg1' />
					<h1>Who are we exactly? some might ask..🧐</h1>
					<p>
						TalkBig is one of the leading enterprises that supports full communication
						systems for either internal data flow within the same organization, or between
						many different shared or cooperative businesses.
					</p>
				</div>
				<div className='sec-2'>
					<div id='svg2' />
					<h1>What are some of our technical tools? 🔧</h1>
					<p>
						TalkBig offers many services and built in software to suport different array
						of clients and customers. We provide chatbot integration on either social
						media accounts, on the web, or on a mobile app too. We also provide chatting
						software integration such as form submissions and many other great offers!
					</p>
				</div>

				<div className='sec-3'>
					<div id='svg3' />
					<h1>Our Business objective 🔧</h1>
					<p>
						At TalkBig, we help startups &amp; businesses maintain a healthy &amp;
						satisfacory relationship with their clients and Vice versa! Our main vision is
						to improve the community, and stay one of the leading forces in the industry
						as we've always been! Let's build the future together! 💙
					</p>
				</div>
			</div>
		</div>
	)
}
