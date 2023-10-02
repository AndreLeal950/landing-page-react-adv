const Form = () => {
	return (
		<div className="event-description">
			<div id="discleimer">
				<h2>AdVocate</h2>
				<p className="about-event">
					Um evento para revolucionar a sua criatividade.
				</p>
				<p>Data do Evento</p>
				<p className="event-date">Domingo, 01 de Outubro, a partir das 14h</p>
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
						<textarea name="message" id="message" cols="130" rows="10">
							Digite aqui..
						</textarea>
					</div>
					<input type="submit" value="Enviar o formulário" className="btn" />
				</form>
			</div>
		</div>
	);
};
export default Form;
