function FechaNacimiento(){
	var today = new Date();
	today.setHours(0,0,0,0);
	var date = Xrm.Page.getAttribute("birthdate");
	var old = date.getValue().getYear()
	//var dateValue = Xrm.Page.getAttribute("new_datevisited").getValue();
	var mensaje = "";
	
	if (date.getValue() != null){
		date.getValue().setHours(0,0,0,0);
		if (date.getValue() > today || old < 0){
			mensaje="Fecha no válida.";
       		// clean the field  Xrm.Page.getAttribute("new_datevisited").setValue(null);
   		}
	}
	
	if (mensaje != ""){
		date.controls.forEach(
		function (control, i){
		control.setNotification(mensaje);
      	});
	}
	else{
		date.controls.forEach(
		function (control, i){
		control.clearNotification();
        });
	}
}