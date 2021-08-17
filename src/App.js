import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
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
