import "../assets/styles/header.css"

function Header(){
	return(
		<header>
			<span>Real State Comanayer</span>
			<div className="botones">
				<div className="boton1">
					<button className="redondo">Ingresar</button>
				
				</div>
				<div className="boton2">
					<button className="redondo">Registrarse</button>
				</div>
			</div>
			
		</header>
	);
}

export default Header;