import img3 from "../assets/pexels-look-my-eyes.jpg";
import img4 from "../assets/pexels-student.jpg";
import img5 from "../assets/vecteezy_business.jpg";

const Details = () => {
	return (
		<div id="details">
			<div className="detail" id="detail-1">
				<img src={img3} alt="sala decorada com tons claros" />
				<div className="detail-description ">
					<h3 className="detailH3">
						Veja alguns dos serviços que o nosso escritório oferece. Nossas
						profissionais são especialista em resolver problemas.
					</h3>
				</div>
			</div>
			<div className="detail" id="detail-2">
				<div className="detail-description">
					<h3>Direito Trabalhista</h3>
					<ul>
						<li>Reforma trabalhista</li>
						<li>Prevalência das Negociações sindicais</li>
						<li>Teletrabalho vs Home Office</li>
						<li>Equiparação salarial</li>
						<li>E muito mais ...</li>
					</ul>
				</div>
				<img src={img4} alt="Sala de jantar decorada" />
			</div>
			<div className="detail" id="detail-3">
				<img src={img5} alt="Sala de jantar decorada" />
				<div className="detail-description">
					<h3>Direito Empresarial</h3>
					<ul>
						<li>Compliance Empresaria</li>
						<li>A Defesa da Empresa no Processo Administrativo</li>
						<li>Direito do Trabalho nas Relações Empresariais</li>
						<li>Negociações Bancárias e otimização de encargos financeiros</li>
						<li>E muito mais ...</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
export default Details;
