import CardInfo from "./CardInformacion"

function informacion (){

	const infoPag = [
		{
		informacion:"Una experiencia fresca a la hora de administrar"
		},
		{
		informacion:"tus ventas, agentes y mucho mas"
		},
		{
		informacion:"Real state es una aplicacion dedicada a la venta de vienes raices, para tener una mejor gestion de todo",
		},
		{
		butt:<button className="b1">Ingresa a Real State</button>
		}
	];
	

	return(
		<div className="Informacion">
		{infoPag.map((info)=>{
			return<CardInfo texto={info.informacion} boton={info.butt}/>;
		})}
		</div>
	)
}

export default informacion;