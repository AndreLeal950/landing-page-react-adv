import "./App.css";

import Form from "./components/Form";
import Benefits from "./components/Benefits";
import Location from "./components/Location";
import Details from "./components/Details";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<body>
				<NavBar />
				<Form />
				<Benefits />
				<Location />
				<Details />
				<Cta />
				<Footer />
			</body>
		</>
	);
}

export default App;
