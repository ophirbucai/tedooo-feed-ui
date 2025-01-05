import { HashRouter, Route, Routes } from "react-router";
import { AppLayout } from "./components/app-layout";
import { FeedPage } from "./pages/feed";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<FeedPage />} />
					<Route
						path="/messaging"
						element={
							<div className="messaging">
								<h1>Messaging</h1>
							</div>
						}
					/>
					<Route
						path="/notifications"
						element={
							<div className="notifications">
								<h1>Notifications</h1>
							</div>
						}
					/>
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
