import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/hoc/ScrollToTop";
import "./styles/style.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ScrollToTop>
					<Header />
					<AppRouter />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
}

export default App;
