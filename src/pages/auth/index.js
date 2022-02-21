import Globe from "comps/auth/globe"
import Wave from "comps/auth/Wave"
import { signIn, signUp } from "context/actions"
import { GlobalContext } from "context/globalContext"
import { useContext, useEffect, useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

import { loginInputs, Logo, registerInputs } from "utility"

export default function Auth() {
	const navigate = useNavigate()
	const [showSignIn, setShowSignIn] = useState(true)
	const [showPass, setShowPass] = useState(false)
	const [state, dispatch] = useContext(GlobalContext)
	const [inputs, setInputs] = useState(loginInputs)
	const localUser = localStorage.getItem("user")

	const empty = {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	}
	const [userData, setUserData] = useState(empty)

	const submitHandler = (e) => {
		e.preventDefault()

		if (showSignIn) {
			signIn(dispatch, userData)
		} else {
			signUp(dispatch, userData)
		}
	}

	useEffect(() => {
		if (localUser) return navigate("/home")
	}, [localUser, navigate])

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value.trim() })
	}

	const title = showSignIn ? "Welcome back!" : "Get Started!"
	const subTitle = showSignIn ? " Don't have an account?" : "Already registered?"
	const action = showSignIn ? "Sign up" : "Sign In"
	const btnAction = showSignIn ? "Sign In" : "Sign up"

	useEffect(() => {
		if (showSignIn) {
			setInputs(loginInputs)
		} else {
			setInputs(registerInputs)
		}
	}, [showSignIn])

	const passCondition = (name) => {
		return name.startsWith("password") || name.startsWith("confirmPassword")
			? showPass
				? "text"
				: "password"
			: "text"
	}

	const passInput = (name) => {
		return (
			name.startsWith("password") && (
				<button
					type='button'
					className='show-pass-btn'
					onClick={() => setShowPass((prev) => !prev)}>
					{showPass ? (
						<AiOutlineEyeInvisible className='icon' />
					) : (
						<AiOutlineEye className='icon' />
					)}
				</button>
			)
		)
	}

	const wrapperClass = () => {
		return !showSignIn ? "sign-up-wrapper" : ""
	}

	return (
		<div className='auth-page'>
			{Logo()}
			<div className='form-wrapper'>
				<Wave />
				<div className='globe-container'>
					<Globe />
				</div>
				<form onSubmit={submitHandler} autoComplete='off'>
					<div className='text'>
						<h1>{title}</h1>
						<p>
							{subTitle}
							<button type='button' onClick={() => setShowSignIn((prev) => !prev)}>
								{action}
							</button>
						</p>
					</div>
					<div className={`inputs-wrapper ${wrapperClass()}`}>
						{inputs.map((input, index) => (
							<div className='input-bar-icon' key={index}>
								{input.icon}
								<input
									type={passCondition(input.name)}
									placeholder={input.placeholder}
									onChange={handleChange}
									name={input.name}
									spellCheck='false'
									autoComplete='off'
								/>
								{passInput(input.name)}
							</div>
						))}
						{showSignIn && (
							<div className='forgot-pass'>
								<Link to='/forgotpass'>Forgot pass?</Link>
							</div>
						)}
					</div>
					<button type='submit' className='submit-btn btn-main'>
						{btnAction}
					</button>
				</form>
			</div>
		</div>
	)
}
