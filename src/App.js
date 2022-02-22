import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { PrivateRoute, PublicRoute } from "utility/customRoutes"
import Header from "comps/header"
import Notification from "comps/fragments/Notification"
//PAGES
import Auth from "pages/auth"
import Home from "pages/home"
import Profile from "pages/profile"
import About from "pages/about"
import NotFound from "pages/notFound"
import Forgot from "pages/forgot"

function App() {
	const privatePages = [
		{ path: "/home", component: <Home /> },
		{ path: "/profile", component: <Profile /> },
		{ path: "/about", component: <About /> },
	]
	const publicPages = [
		{ path: "/", component: <Auth /> },
		{ path: "/forgot", component: <Forgot /> },
	]

	return (
		<Router>
			<Header />
			<Notification />
			<Routes>
				{publicPages.map((page, index) => (
					<Route
						key={index}
						path={page.path}
						element={<PublicRoute>{page.component}</PublicRoute>}
					/>
				))}
				{privatePages.map((page, index) => (
					<Route
						key={index}
						path={page.path}
						element={<PrivateRoute>{page.component}</PrivateRoute>}
					/>
				))}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
