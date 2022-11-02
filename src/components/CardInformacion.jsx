import "../assets/styles/informacion.css"

export default function CardInformacion({texto,boton}){
	return(
	<div className="PInformacion">
      <div className="P1">
        <a>{texto}</a>
      </div>
	  <div className="boton">
		{boton}
	  </div>
	</div>
	)
}