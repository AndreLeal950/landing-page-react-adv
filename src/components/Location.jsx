import { FaLocationDot } from "react-icons/fa6";

const Location = () => {
	return (
		<div id="location">
			<div id="address">
				<i className="geolocation">
					<FaLocationDot />
				</i>
				<div id="address-details">
					<h3>Nosso Escritório fica localizado:</h3>
					<p>Rua dos vencedores, 1234</p>
					<p>Bairro da Properidade</p>
					<p>Belém - Pará - Brasil</p>
				</div>
			</div>
			<div id="about-location">
				<h3>O Advogado:</h3>
				<p>
					Um advogado é um guia, defensor e estrategista legal. Ele é alguém que
					compreende as complexidades do sistema jurídico e trabalha
					incansavelmente para proteger os direitos e interesses do cliente. O
					advogado oferece aconselhamento jurídico, ajuda a navegar pelos
					processos legais, representa o cliente em tribunais e negociações, e
					busca soluções criativas para resolver o problema. Em resumo, um
					advogado é um aliado crucial que luta pela justiça e serve como uma
					fonte de confiança e expertise em momentos de dificuldade legal.
				</p>
			</div>
		</div>
	);
};
export default Location;
