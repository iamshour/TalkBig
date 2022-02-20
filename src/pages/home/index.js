import Chat from "comps/home/Chat"
import Graph from "comps/home/Graph"
import { BsPatchCheck } from "react-icons/bs"

export default function Home() {
	const textList = [
		{ text: "Live-chat omnichannel web or app integration!" },
		{
			text: "Build custom chatbots integrate it's superpowers for user's websites or via their social media accounts!",
		},
		{ text: "Code-free tools to implement advanced web messaging software!" },
	]

	return (
		<div>
			<div className='home-page'>
				<section className='text-section'>
					<div className='sec-1'>
						<h1>Let's build the future together! 💙</h1>
						<p>
							<span>TalkBig</span> helps startsups &amp; businesses stand-out with award
							winning messaging integrations and tools!
						</p>
					</div>
					<div className='sec-2'>
						<h1>Services for our users</h1>
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
				</section>
				<section className='graph-section'>
					<Graph />
				</section>
				<section className='chatbot-section'>
					<Chat />
				</section>
			</div>
		</div>
	)
}
