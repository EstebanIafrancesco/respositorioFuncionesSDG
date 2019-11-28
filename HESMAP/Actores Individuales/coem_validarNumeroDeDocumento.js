function ValidateNumeric(){
	var tipo = Xrm.Page.getAttribute("coem_tipodeidentificacion").getValue();
	var NoIdentificacion = Xrm.Page.getAttribute("coem_noidentificacion");
	var mensaje = "";

	NoIdentificacion.controls.forEach(
			function (control, i){
				control.clearNotification();
            });

	if (NoIdentificacion.getValue() != null){
		var value = NoIdentificacion.getValue();
		var formattedValue = value.replace(/\s+/g, '');
		NoIdentificacion.setValue(formattedValue);
		var numbers = /^[0-9]+$/;
	//Número de Identificación: 	NoIdentificain
	//Cedula de ciudadanía 			266.980.000
	//Cedula de extranjería 		266.980.002
	//Número Único de Identificación Personal (NUIP) 266.980.006
	//Pasaporte						266.980.001
	//Registro civil de nacimiento	266.980.005
	//Sin información				266.980.007
	//Tarjeta de extranjería		266.980.003
	//Tarjeta de identidad			266.980.004

		if(tipo == 266980000){
			if (!formattedValue.match(numbers)){
				mensaje = "El documento debe contener sólo números";
				NoIdentificacion.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");
				
			}
			else if(value.length < 6 ||  value.length > 10 || value.length == 9){
				mensaje = "La longitud del número ingresado es incorrecta";
			}
		}else if(tipo == 266980004){
			if (!formattedValue.match(numbers)){
				mensaje = "El documento debe contener sólo números";
				NoIdentificacion.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");	
			}
			else if(value.length < 10 || value.length > 11){
				mensaje = "La longitud del número ingresado es incorrecta";
			}
		}else if(tipo == 266980005 || tipo == 266980006){
			if(value.length = 11 && !formattedValue.match(numbers)){
				mensaje = "El documento debe contener sólo números";
			}
			else if (value.length != 10){
				mensaje = "La longitud del número ingresado es incorrecta";
			}
		}else if(tipo == 266980007){
			NoIdentificacion.setValue("Sin información");
		}
		if (mensaje != "")
		{
			NoIdentificacion.controls.forEach(
			function (control, i){
				control.setNotification(mensaje);
            });
		}
		else
		{
			NoIdentificacion.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
		}
	}
}