import Modal from "comps/fragments/Modal"
import { useRef, useState } from "react"
import { botGreeting, dialogue, Logo } from "utility"
import Bot from "./Bot"

export default function Chat() {
	const [chatOpened, setChatOpened] = useState(false)
	const [newMessage, setNewMessage] = useState("")
	const scrollTo = useRef()

	const [chatFlow, setChatFlow] = useState([botGreeting])

	const handleSubmit = (e) => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault()

			let personMsg = { text: newMessage, owner: "person" }
			scrollTo.current.scrollIntoView({ behavior: "smooth" })

			setChatFlow([...chatFlow, personMsg])

			setTimeout(() => {
				setChatFlow([...chatFlow, personMsg, dialogue(newMessage.toLowerCase())])
				scrollTo.current.scrollIntoView({ behavior: "smooth" })
			}, 2000)

			setNewMessage("")
		}
	}

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
								<p key={index} className={item.owner}>
									{item?.text}
								</p>
							))}
							<div ref={scrollTo} />
						</div>
						<form onSubmit={handleSubmit} className='bottom'>
							<textarea
								cols='2'
								placeholder='Type your message here'
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
								onKeyDown={handleSubmit}
							/>
						</form>
					</div>
				</Modal>
			)}
		</>
	)
}
