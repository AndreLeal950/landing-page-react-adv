const Form = () => {
	return (
		<div className="event-description">
			<div id="discleimer">
				<h2>ADvocate</h2>
				<h3 className="about-event">
					Nosso Escritório tem Advogadas comprometidas com a justiça e a
					igualdade.
				</h3>
				<p className="event-date">Estamos prontas para ajudar!</p>
				<>
					<a
						href="https://wa.me/551130042222?text=Ví que você veio do nosso site, seja bem vindo(a)! Como podemos te ajudar?"
						target="_blank"
						rel="noreferrer"
					>
						<input
							type="submit"
							value="clique para whatsApp"
							className="btn  button"
						/>
					</a>
				</>
			</div>
			<div id="subscription-form">
				<p>Preencha o fomulário</p>
				<form>
					<div className="form-group">
						<label htmlFor="name">Nome</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Digite seu nome"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Digite seu melhor email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">WhatsApp</label>
						<input
							type="phone"
							name="phone"
							id="phone"
							placeholder="Digite seu whatsapp"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="interest">Qual a sua dúvida?</label>
						<textarea
							name="message"
							id="message"
							cols="130"
							rows="10"
							placeholder="Digite aqui.."
						/>
					</div>
					<input
						type="submit"
						value="Enviar o formulário"
						className="btn  button"
					/>
				</form>
			</div>
		</div>
	);
};
export default Form;
