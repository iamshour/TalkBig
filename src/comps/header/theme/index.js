import { useEffect, useRef, useState } from "react"

export default function Theme() {
	const [theme, setTheme] = useState("light")
	const themeCheck = useRef(null)

	useEffect(() => {
		setTheme(
			localStorage.getItem("theme")
				? localStorage.getItem("theme")
				: localStorage.setItem("theme", theme)
		)

		theme.startsWith("light")
			? (themeCheck.current.checked = false)
			: (themeCheck.current.checked = true)

		document.documentElement.setAttribute("data-theme", theme)
	}, [theme])

	const saveTheme = (choice) => {
		setTheme(choice)
		localStorage.setItem("theme", choice)
		document.documentElement.setAttribute("data-theme", choice)
	}

	const handleChange = () => {
		if (theme === "light") {
			saveTheme("dark")
		} else {
			saveTheme("light")
		}
	}

	return (
		<label className='theme-switch' onChange={handleChange}>
			<input type='checkbox' ref={themeCheck} />
			<span className='slider' />
		</label>
	)
}
