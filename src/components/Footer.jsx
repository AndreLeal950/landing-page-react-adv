import image from "../assets/mulher-balanca.jpg";

const Footer = () => {
	return (
		<footer id="footer">
			<img src={image} alt="mulher com balança da justiça" className="img" />
			<h3>ADvocate</h3>
			<p>Um escritório voltado para melhor atender os nosso clientes.</p>
			<p>
				<span>Entre em contato:</span> teste@email.com
			</p>
			<p>
				<span>Ou pelo fone:</span> 99-1234-56789
			</p>
			<div className="whats">
				<a
					href="https://wa.me/551130042222?text=Ví que você veio do nosso site, seja bem vindo(a)! Como podemos te ajudar?"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src="./src/assets/whatsApp.png"
						alt="Fale conosco pelo whatsapp"
						title="Fale conosco pelo whatsapp"
					/>
				</a>
			</div>
		</footer>
	);
};
export default Footer;
