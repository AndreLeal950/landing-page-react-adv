import "./App.css";

import Form from "./components/Form";
import Benefits from "./components/Benefits";
import Location from "./components/Location";
import Details from "./components/Details";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<body>
				<Navbar />
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
