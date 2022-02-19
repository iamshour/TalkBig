import { useContext, useEffect, useRef } from "react"
import { GlobalContext } from "context/globalContext"
import Loading from "./Loading"
import { NOTIFY } from "context/types"

export default function Notification() {
	const [{ notify }, dispatch] = useContext(GlobalContext)
	const toastRef = useRef()

	useEffect(() => {
		if (notify?.error || notify?.success) {
			setTimeout(() => {
				toastRef.current.style.animationName = "slidingOut"
			}, 3000)

			setTimeout(() => {
				dispatch({
					type: NOTIFY,
					payload: {},
				})
			}, 4000)
		}
	}, [notify?.error, notify?.success])

	return (
		<>
			{notify?.loading ? (
				<Loading />
			) : notify?.error || notify?.success ? (
				<div
					className={`notification-container ${
						notify?.error ? "notify-error" : "notify-success"
					}`}>
					<div className='wrapper' ref={toastRef}>
						<p>{notify?.error ? "Error" : "Success!"}</p>
						<p>{notify?.error ? notify?.error : notify?.success}</p>
					</div>
				</div>
			) : null}
		</>
	)
}
