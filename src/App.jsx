import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<div>
					<Header />
					<Nav />
					<div className="mt-[65px] px-6">
						<Routes>
							<Route
								path="/"
								element={<Home />}
							/>
						</Routes>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
