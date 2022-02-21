import { BiKey } from "react-icons/bi"
import { IoMailOpenOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"

export const handLeft =
	"https://res.cloudinary.com/dniaqkd0y/image/upload/v1645413557/hand-robot_djo8xl.png"

export const handRight =
	"https://res.cloudinary.com/dniaqkd0y/image/upload/v1645413558/hand-person_u7jnbj.png"

export const Logo = () => {
	return (
		<img
			src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1645209070/logo_lnyfrv.png'
			alt='talkbig app logo'
			className='logo'
		/>
	)
}

export const avatar = () => {
	return (
		<img
			src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1639408597/blank-profile-picture-973460_640_caalj3.png'
			alt='user profile avatar'
			className='avatar'
		/>
	)
}

export const loginInputs = [
	{
		name: "email",
		placeholder: "Enter your email",
		icon: <IoMailOpenOutline className='icon' />,
	},
	{
		name: "password",
		placeholder: "Enter your password",
		icon: <BiKey className='icon' />,
	},
]

export const registerInputs = [
	{
		name: "name",
		placeholder: "Enter your name",
		icon: <AiOutlineUser className='icon' />,
	},
	{
		name: "email",
		placeholder: "Enter your email",
		icon: <IoMailOpenOutline className='icon' />,
	},
	{
		name: "password",
		placeholder: "Enter your password",
		icon: <BiKey className='icon' />,
	},
	{
		name: "confirmPassword",
		placeholder: "Confirm your password",
		icon: <BiKey className='icon' />,
	},
]

export const botGreeting = {
	text: "Hey there!👋 Nice to meet you!💛 Ask me anything on our services. I'm all ears😉",
	owner: "bot",
}

let greetings = ["hi", "hello", "hey"]
let questions = ["how are you", "how are you?", "how are you doing?", "how you been?"]

export const dialogue = (message) => {
	if (greetings.includes(message)) {
		return {
			text: "Hello there! You're most welcomed here at TalkBig! How can I help you?🙂",
			owner: "bot",
		}
	} else if (questions.includes(message)) {
		return {
			text: "I'm doing pretty good! Thanks for asking! What about you?",
			owner: "bot",
		}
	}
	return {
		text: "If you find our answers not very helpful, check out our FAQs in the about page!",
		owner: "bot",
	}
}
