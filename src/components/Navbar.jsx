import { useState } from "react";
import image from "../assets/mulher-balanca.jpg";
import { Link, NavLink } from "react-router-dom";
import "../../src/NavBar.css";

const NavBar2 = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav>
			<Link to="/" className="logo">
				<img src={image} alt="mulher com balança da justiça" className="img" />
				<p>ADvocate</p>
			</Link>
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
					<NavLink to="/">Sobre</NavLink>
				</li>
				<li>
					<NavLink to="/">Serviços</NavLink>
				</li>
				<li>
					<NavLink to="/">Contato</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar2;
