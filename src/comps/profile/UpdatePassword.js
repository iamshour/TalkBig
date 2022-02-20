import { updatePass, updateProfile } from "context/actions"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { BsCheck2Circle } from "react-icons/bs"
import { useState } from "react"
import { AiOutlineUser } from "react-icons/ai"
import { IoMailOpenOutline } from "react-icons/io5"

export default function UpdatePassword({ dispatch, userId, setOpen }) {
	const [updatedData, setUpdatedData] = useState({
		oldPass: "",
		newPass: "",
		confirmNewPass: "",
	})

	const inputs = [
		{
			placeholder: "Old password",
			icon: <AiOutlineUser className='icon' />,
			name: "oldPass",
		},
		{
			placeholder: "New password",
			icon: <IoMailOpenOutline className='icon' />,
			name: "newPass",
		},
		{
			placeholder: "Confirm new password",
			icon: <IoMailOpenOutline className='icon' />,
			name: "confirmNewPass",
		},
	]

	const handleChange = (e) => {
		setUpdatedData({ ...updatedData, [e.target.name]: e.target.value.trim() })
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		updatePass(dispatch, userId, updatedData)
		setOpen(false)
	}

	return (
		<div className='profile-modal-content'>
			<div className='wrapper'>
				<h2>Update Your Password</h2>
				<div className='inputs'>
					{inputs.map((input, index) => (
						<div className='input-bar-icon' key={index}>
							{input.icon}
							<input
								type='password'
								placeholder={input.placeholder}
								onChange={handleChange}
								name={input.name}
								spellCheck='false'
								autoComplete='off'
							/>
						</div>
					))}
				</div>
				<div className='btns'>
					<button className='btn-dark' onClick={handleUpdate}>
						<BsCheck2Circle className='icon' />
						<p>Confirm</p>
					</button>
					<button className='btn-main' onClick={() => setOpen(false)}>
						<IoIosCloseCircleOutline className='icon' />
						<p>Cancel</p>
					</button>
				</div>
			</div>
		</div>
	)
}
