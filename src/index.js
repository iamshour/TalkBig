import GlobalProvider from "context/globalContext"
import React from "react"
import ReactDOM from "react-dom"
import "styles/main.scss"
import App from "./App"

ReactDOM.render(
	<React.StrictMode>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</React.StrictMode>,
	document.getElementById("root")
)
