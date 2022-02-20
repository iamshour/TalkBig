import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "pages/home"
import Auth from "pages/auth"
import NotFound from "pages/notFound"
import { PrivateRoute, PublicRoute } from "utility/customRoutes"
import Header from "comps/header"
import About from "pages/about"
import Profile from "pages/profile"
import Notification from "comps/fragments/Notification"

function App() {
	const pages = [
		{ path: "/", component: <Home /> },
		{ path: "/profile", component: <Profile /> },
		{ path: "/about", component: <About /> },
	]

	return (
		<Router>
			<Header />
			<Notification />
			<Routes>
				{pages.map((page, index) => (
					<Route
						key={index}
						path={page.path}
						element={
							// page.component
							<PrivateRoute>{page.component}</PrivateRoute>
						}
					/>
				))}
				<Route
					path='/auth'
					element={
						<PublicRoute>
							<Auth />
						</PublicRoute>
					}
				/>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
