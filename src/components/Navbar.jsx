import { useState } from "react";
// import image from "../assets/mulher-balanca.jpg";
import { NavLink } from "react-router-dom";
import "../../src/NavBar.css";

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<div
				className="menu"
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul className={menuOpen ? "open" : ""}>
				<li>
					<NavLink to="/about">Sobre</NavLink>
				</li>
				<li>
					<NavLink to="/contact">Contato</NavLink>
				</li>
				<li>
					<NavLink to="/services">Serviços</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
