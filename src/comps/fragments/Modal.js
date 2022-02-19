import { useEffect } from "react"
import { createPortal } from "react-dom"

export default function Modal({ children, open, setOpen }) {
	const handleClose = (e) => {
		if (e.target.classList.contains("modal-backdrop")) return setOpen(false)
	}

	useEffect(() => {
		document.documentElement.style.overflowY = "hidden"

		return () => {
			document.documentElement.style.overflowY = "visible"
		}
	}, [open])

	return createPortal(
		<div className='modal-backdrop' onClick={handleClose}>
			{children}
		</div>,
		document.getElementById("portal")
	)
}
