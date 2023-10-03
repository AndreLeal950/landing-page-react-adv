import { useState } from "react";

const Navbar = () => {
	const [active, setActive] = useState("nav_menu");
	const [togglerIcon, setTogglerIcon] = useState("nav_toggler");

	const navToggle = () => {
		active === "nav_menu"
			? setActive("nav_menu nav_active")
			: setActive("nav_menu");

		//TogglerIcon

		togglerIcon === "nav_toggler"
			? setTogglerIcon("nav_toggler toggle")
			: setTogglerIcon("nav_toggler");
	};

	return (
		<nav className="nav">
			<a href="#" className="nav_brand">
				LOGO
			</a>
			<ul className={active}>
				<li className="nav_item">
					<a href="#" className="nav_link">
						Home
					</a>
				</li>
				<li className="nav_item">
					<a href="#" className="nav_link">
						About
					</a>
				</li>
				<li className="nav_item">
					<a href="#" className="nav_link">
						Contato
					</a>
				</li>
			</ul>
			<div className={togglerIcon} onClick={navToggle}>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</nav>
	);
};

export default Navbar;
