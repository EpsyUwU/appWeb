import Formulario from "../components/CardBody"
import Informacion from "../components/Informacion";
import "../assets/styles/root.css"
import "../assets/styles/secciones.css"

function Secciones() {
	return(
		<>
			<div className="Secciones">
				<div className="SF">
					<Formulario/>
					
				</div>
				<div className="SI">
					<Informacion/>
				</div>
			</div>
		</>
	);
}

export default Secciones;