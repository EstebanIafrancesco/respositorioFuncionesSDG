function  LimpiarOtroGenero(){
	var  tipo = Xrm.Page.getAttribute("gendercode").getValue();
	var cual = Xrm.Page.getAttribute("coem_cualgenero");
//genero: 266.980.001

	if(tipo != 266980001)
			//AditionalDetails - formacion academica trayectoria laboral informacion lecttoral
			//infoProyectos
			cual.setValue(null);
}

function  LimpiarOtroOrientacion(){
	var  tipo = Xrm.Page.getAttribute("coem_orientacionsexual").getValue();
	var cual = Xrm.Page.getAttribute("coem_cualorientacionsexual");
//genero: 266.980.001
//orientacion sexual: 266.980.003
//etnia: 266.980.005
	if(tipo != 266980003)
			//AditionalDetails - formacion academica trayectoria laboral informacion lecttoral
			//infoProyectos
			cual.setValue(null);
}

function  LimpiarOtroEtnia(){
	var  tipo = Xrm.Page.getAttribute("coem_etnia").getValue();
	var cual = Xrm.Page.getAttribute("coem_cualetnia");
//genero: 266.980.001
//orientacion sexual: 266.980.003
//etnia: 266.980.005
	if(tipo != 266980005)
			//AditionalDetails - formacion academica trayectoria laboral informacion lecttoral
			//infoProyectos
			cual.setValue(null);
}

function  LimpiarNombreidentitario(){
	var  tipo = Xrm.Page.getAttribute("gendercode").getValue();
	var cual = Xrm.Page.getAttribute("coem_identidadgenero");
console.log(Xrm.Page.getAttribute("gendercode"));
console.log(tipo);
//sexo intersexual: 266.980.000
	if(tipo != 266980000)
			//AditionalDetails - formacion academica trayectoria laboral informacion lecttoral
			//infoProyectos
			cual.setValue(null);
}

function  LimpiarFechaDebate(){
	var  tipo = Xrm.Page.getAttribute("coem_serealizaradebate").getValue();
	var cual = Xrm.Page.getAttribute("coem_fechadebate");
	//SI: 266.980.000
	//NO: 266.980.001
	if(tipo != 266980000)
			//AditionalDetails - formacion academica trayectoria laboral informacion lecttoral
			//infoProyectos
			cual.setValue(null);
}

function  LimpiarObservacion(){
	var observacion = Xrm.Page.getAttribute("coem_observacin");
	 if (Xrm.Page.getAttribute('coem_fechafin').getValue() != null) {
		//console.log(observacion);
		observacion.setValue(null);
	}			
}