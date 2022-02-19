import Modal from "comps/fragments/Modal"
import React, { useState } from "react"
import { Logo } from "utility"
import Bot from "./Bot"

export default function Chat() {
	const [chatOpened, setChatOpened] = useState(false)

	const initial = [
		{
			text: "Hey there!👋 Nice to meet you!💛 Ask me anything on our services. I'm all ears😉",
		},
	]
	const [chatFlow, setChatFlow] = useState(initial)

	return (
		<>
			<Bot setOpen={setChatOpened} />
			{chatOpened && (
				<Modal open={chatOpened} setOpen={setChatOpened}>
					<div className='chat-container'>
						<div className='top'>
							<p>TalkBig's Bot is here for your!</p>
							{Logo()}
						</div>
						<div className='middle'>
							{chatFlow.map((item, index) => (
								<p key={index}>{item?.text}</p>
							))}
						</div>
						<div className='bottom'>
							<textarea name='chat' cols='2' placeholder='Type your message here' />
						</div>
					</div>
				</Modal>
			)}
		</>
	)
}
