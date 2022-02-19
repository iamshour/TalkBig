import ChatBot from "comps/home/ChatBot"
import Graph from "comps/home/Graph"

export default function Home() {
	return (
		<div>
			<div className='home-page'>
				<div className='home-text'>
					<section>
						<h1>Let's build the future together! 💙</h1>
						<p>
							<span>TalkBig</span> helps startsups &amp; businesses stand-out with award
							winning messaging integrations and tools!
						</p>
					</section>
					<section>
						<h1>Services to our users</h1>
						<ul>
							<li>
								Build custom chatbots &amp; integrate it's superpowers for user's websites
								or via their social media accounts!
							</li>
							<li>Live-chat omnichannel web or app integration!</li>
							<li>Code-free tools to implement advanced web messaging software!</li>
						</ul>
					</section>
				</div>
				<div className='graph'>
					<Graph />
					<ChatBot />
				</div>
			</div>
		</div>
	)
}
