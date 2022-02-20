import { avatar } from "utility"
import { MdUpdate } from "react-icons/md"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "context/globalContext"
import { viewProfile } from "context/actions"
import Modal from "comps/fragments/Modal"
//ICONS
import { IoMailOpenOutline } from "react-icons/io5"
import { AiOutlineUser } from "react-icons/ai"
import UpdateProfile from "comps/profile/UpdateProfile"
import UpdatePassword from "comps/profile/UpdatePassword"

export default function Profile() {
	const [{ userInfo, notify }, dispatch] = useContext(GlobalContext)
	const userId = JSON.parse(localStorage.getItem("user")).id
	const [openUpdateModal, setOpenUpdateModal] = useState(false)
	const [openPassModal, setOpenPassModal] = useState(false)

	useEffect(() => {
		viewProfile(dispatch, userId)
	}, [notify?.success, dispatch, userId])

	const myData = [
		{ title: userInfo.name, icon: <AiOutlineUser className='icon' /> },
		{ title: userInfo.email, icon: <IoMailOpenOutline className='icon' /> },
	]

	return (
		<div className='profile-page'>
			<div className='profile-wrapper'>
				<h1 className='headline'>Profile Info</h1>
				<div className='img-wrapper'>{avatar()}</div>
				<div className='inputs-wrapper'>
					{myData.map((item, index) => (
						<div className='row' key={index}>
							{item.icon}
							<p>{item.title}</p>
						</div>
					))}
					<button className='btn-dark' onClick={() => setOpenUpdateModal(true)}>
						<MdUpdate className='icon' />
						<p>Update Info</p>
					</button>
					<button className='btn-dark' onClick={() => setOpenPassModal(true)}>
						<MdUpdate className='icon' />
						<p>Update Password</p>
					</button>
				</div>
			</div>
			{openUpdateModal && (
				<Modal open={openUpdateModal} setOpen={setOpenUpdateModal}>
					<UpdateProfile
						dispatch={dispatch}
						userId={userId}
						setOpen={setOpenUpdateModal}
					/>
				</Modal>
			)}
			{openPassModal && (
				<Modal open={openPassModal} setOpen={setOpenPassModal}>
					<UpdatePassword
						dispatch={dispatch}
						userId={userId}
						setOpen={setOpenPassModal}
					/>
				</Modal>
			)}
		</div>
	)
}
