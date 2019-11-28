//----------------------------------------------------------------------------------------------------------------------------------------------
//Validar Primer nombre
function ValidarPrimerNombre(){
	//var tipo = Xrm.Page.getAttribute("telephone1").getValue();
	var Nombre = Xrm.Page.getAttribute("firstname");
	var mensaje = "";
	
	Nombre.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (Nombre.getValue() != null){
		var formattedValue = Nombre.getValue();
		//var formattedValue = value.replace(/\s+/g, '');
		Nombre.setValue(formattedValue);
		var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
		
		if(Nombre.getValue().length == 1)
		{
			mensaje = "La longitud del nombre es inválida";
			Nombre.setValue(null);
		} else if (!formattedValue.match(letters)){
				mensaje = "El nombre debe contener sólo letras";
				Nombre.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");
			}
	}
	
	if (mensaje != "")
	{
		Nombre.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		Nombre.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}

//----------------------------------------------------------------------------------------------------------------------------------------------
//Validar Segundo nombre
function ValidarSegundoNombre(){
	//var tipo = Xrm.Page.getAttribute("telephone1").getValue();
	var Nombre = Xrm.Page.getAttribute("middlename");
	var mensaje = "";

	
	Nombre.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (Nombre.getValue() != null){
		var formattedValue = Nombre.getValue();
		//var formattedValue = value.replace(/\s+/g, '');
		Nombre.setValue(formattedValue);
		var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

		if (Nombre.getValue() != null){
			
			var formattedValue = Nombre.getValue();
			//var formattedValue = value.replace(/\s+/g, '');
			Nombre.setValue(formattedValue);
			var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
		
			if(Nombre.getValue().length == 1) {
				mensaje = "La longitud del nombre es inválida";
				Nombre.setValue(null);
			} else if (!formattedValue.match(letters)){
				mensaje = "El nombre debe contener sólo letras";
				Nombre.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");			
			}
		}	
	}
	
	if (mensaje != "")
	{
		Nombre.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		Nombre.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}

//----------------------------------------------------------------------------------------------------------------------------------------------
//Validar Primer apellido
function ValidarPrimerApellido(){
	//var tipo = Xrm.Page.getAttribute("telephone1").getValue();
	var Nombre = Xrm.Page.getAttribute("coem_primerapellido");
	var mensaje = "";
	
	Nombre.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (Nombre.getValue() != null){
		var formattedValue = Nombre.getValue();
		//var formattedValue = value.replace(/\s+/g, '');
		Nombre.setValue(formattedValue);
		var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

		if (Nombre.getValue() != null){
			
			var formattedValue = Nombre.getValue();
			//var formattedValue = value.replace(/\s+/g, '');
			Nombre.setValue(formattedValue);
			var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
		
			if(Nombre.getValue().length == 1) {
				mensaje = "La longitud del apellido es inválida";
				Nombre.setValue(null);
			} else if (!formattedValue.match(letters)){
				mensaje = "El nombre debe contener sólo letras";
				Nombre.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");			
			}
		}	
	}
	
	if (mensaje != "")
	{
		Nombre.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		Nombre.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}
//----------------------------------------------------------------------------------------------------------------------------------------------
//Validar Segundo apellido
function ValidarSegundoApellido(){
	//var tipo = Xrm.Page.getAttribute("telephone1").getValue();
	var Nombre = Xrm.Page.getAttribute("coem_segundoapellido");
	var mensaje = "";
	
	Nombre.controls.forEach(
			function (control, i){
				control.clearNotification();
            });
	
	if (Nombre.getValue() != null){
		var formattedValue = Nombre.getValue();
		//var formattedValue = value.replace(/\s+/g, '');
		Nombre.setValue(formattedValue);
		var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

		if (Nombre.getValue() != null){
			
			var formattedValue = Nombre.getValue();
			//var formattedValue = value.replace(/\s+/g, '');
			Nombre.setValue(formattedValue);
			var letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
		
			if(Nombre.getValue().length == 1) {
				mensaje = "La longitud del apellido es inválida";
				Nombre.setValue(null);
			} else if (!formattedValue.match(letters)){
				mensaje = "El nombre debe contener sólo letras";
				Nombre.setValue(null);
				//alert("Cédula de ciudadanía: Completamente numérico con longitud de 6, 7, 8 ó 10 dígitos.");			
			}
		}
	}
	
	if (mensaje != "")
	{
		Nombre.controls.forEach(
		function (control, i){
			control.setNotification(mensaje);
        });
	}
	else
	{
		Nombre.controls.forEach(
		function (control, i){
			control.clearNotification();
        });
	}
}

//----------------------------------------------------------------------------------------------------------------------------------------------
//Escribir en campo de solo lectura:
function SetValueCargoInstitucion(){

	var Institucion = Xrm.Page.getAttribute("coem_institucion");
	var InstVisible = Xrm.Page.getAttribute("coem_institucionvisible");
	
	var Cargo = Xrm.Page.getAttribute("coem_cargoactual");
	var CargoVisible = Xrm.Page.getAttribute("coem_cargoactualvisible");
	
	if (Institucion.getValue() != null && Cargo.getValue() != null){
		var Instituvalue = Institucion.getValue()[0].name;
		var Cargovalue = Cargo.getValue()[0].name;

		InstVisible.setValue(Instituvalue);
		CargoVisible.setValue(Cargovalue);	
	}
	if (Institucion.getValue() == null && Cargo.getValue() == null){
		InstVisible.setValue(null);
		CargoVisible.setValue(null);	
	}
}