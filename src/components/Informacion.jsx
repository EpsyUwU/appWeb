import CardInfo from "../components/CardInformacion"

function informacion (){

	const infoPag = [
		{
		informacion:"1.- Registrate"
		},
		{
		informacion:"2.- ¡¡Entra con tu nueva cuenta!!"
		},
		{
		informacion:"3.- Disfruta de todos los beneficios que te da Respuesta Facilita"
		},
	];
	

	return(
		<div className="Informacion">
		{infoPag.map((info)=>{
			return<CardInfo texto={info.informacion}/>;
		})}
		</div>
	)
}

export default informacion;