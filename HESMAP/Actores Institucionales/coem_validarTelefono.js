function ValidarTelefono(){
	//var tipo = Xrm.Page.getAttribute("telephone1").getValue();
	var telefono = Xrm.Page.getAttribute("telephone1");
	var mensaje = "";
	
	telefono.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (telefono.getValue() != null){
		var value = telefono.getValue();
		var formattedValue = value.replace(/\s+/g, '');
		telefono.setValue(formattedValue);
		var numbers = /^[0-9]+$/;

			if (!formattedValue.match(numbers)){
				mensaje = "Teléfono debe contener sólo números";
				telefono.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");
			}
			else if(formattedValue.length > 10){
				mensaje = "La longitud del número ingresado es incorrecta";
			}
	}
	
	if (mensaje != "")
	{
		telefono.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		telefono.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}

function ValidarTelefonoAsistente(){
	//var tipo = Xrm.Page.getAttribute("telephone1").getValue();
	var telefono = Xrm.Page.getAttribute("assistantphone");
	var mensaje = "";
	
	telefono.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (telefono.getValue() != null){
		var value = telefono.getValue();
		var formattedValue = value.replace(/\s+/g, '');
		telefono.setValue(formattedValue);
		var numbers = /^[0-9]+$/;

			if (!formattedValue.match(numbers)){
				mensaje = "Teléfono debe contener sólo números";
				telefono.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");
			}
			else if(formattedValue.length > 10){
				mensaje = "La longitud del número ingresado es incorrecta";
			}
	}
	
	if (mensaje != "")
	{
		telefono.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		telefono.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}
//managerphone - ValidarTelefonoAsesor
function ValidarTelefonoAsesor(){
	//var tipo = Xrm.Page.getAttribute("managerphone").getValue();
	var telefono = Xrm.Page.getAttribute("managerphone");
	var mensaje = "";
	
	telefono.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (telefono.getValue() != null){
		var value = telefono.getValue();
		var formattedValue = value.replace(/\s+/g, '');
		telefono.setValue(formattedValue);
		var numbers = /^[0-9]+$/;

			if (!formattedValue.match(numbers)){
				mensaje = "Teléfono debe contener sólo números";
				telefono.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");
			}
			else if(formattedValue.length > 10){
				mensaje = "La longitud del número ingresado es incorrecta";
			}
	}
	
	if (mensaje != "")
	{
		telefono.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		telefono.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}