import "../assets/styles/informacion.css"

export default function CardInformacion({texto}){
	return(
		<div className="PInformacion">
      <div className="P1">
        <a>{texto}</a>
      </div>
	</div>
	)
}