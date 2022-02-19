import { BiKey } from "react-icons/bi"
import { IoMailOpenOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"

export const Logo = () => {
	return (
		<img
			src='https://res.cloudinary.com/dniaqkd0y/image/upload/v1645209070/logo_lnyfrv.png'
			alt='talkbig app logo'
			className='logo'
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
