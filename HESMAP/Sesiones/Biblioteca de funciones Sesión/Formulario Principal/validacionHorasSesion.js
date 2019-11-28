// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 16082019

// Verificación de los campos de hora, en el desarrollo de la Sesión

// ********************************************************************************************* //
// Verificación hora de fin de Sesión
function horaSesionPermanente(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_sesion_permanente");
    verificacionFormatoHora(horaPorVerificar);
}
// ********************************************************************************************* //
// Verificación hora de inicio de Sesión
function horaInicioSesion(executionContext) {

    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_hora_de_inicio_sesion");
    verificacionFormatoHora(horaPorVerificar);
}
// ********************************************************************************************* //
// Verificación hora de fin de Sesión
function horaFinSesion(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_hora_fin_de_sesion");
    verificacionFormatoHora(horaPorVerificar);
}
// ********************************************************************************************* //
// Verificación hora de inicio de Receso 1
function horaInicioReceso1(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_inicio_receso_1");
    verificacionFormatoHora(horaPorVerificar);
}
// ********************************************************************************************* //
// Verificación hora de fin de Receso 1
function horaFinReceso1(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_fin_receso_1");
    verificacionFormatoHora(horaPorVerificar);
}
// ********************************************************************************************* //
// Verificación hora de inicio
function horaInicioReceso2(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_inicio_receso_2");
    verificacionFormatoHora(horaPorVerificar);
}
// ********************************************************************************************* //
// Verificación hora de fin de Receso 1
function horaFinReceso2(executionContext) {
    
    var formContext = executionContext.getFormContext();
    var horaPorVerificar = formContext.getAttribute("oap_fin_receso_2");
    verificacionFormatoHora(horaPorVerificar);
}

// ********************************************************************************************* //
// Función para verificación de formato de hora

    function verificacionFormatoHora(horaPorVerificar){

        // var horaPorVerificar = Xrm.Page.getAttribute(campo);
        var mensaje = "";
    
        horaPorVerificar.controls.forEach(
            function (control, i) {
                control.clearNotification();
            });
    
        if (horaPorVerificar.getValue() != null) {
            var value = horaPorVerificar.getValue();
            var formattedValue = value.replace(/\s+/g, '');
            horaPorVerificar.setValue(formattedValue);
            var hora = /^([1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/;
    
            if (!formattedValue.match(hora)) {
                mensaje = "El campo debe ser numérico, con el siguiente formato   Hh : Mm ";
                horaPorVerificar.setValue(null);
            }
        }
    
        if (mensaje != "") {
            horaPorVerificar.controls.forEach(
                function (control, i) {
                    control.setNotification(mensaje);
                });
        }
        else {
            horaPorVerificar.controls.forEach(
                function (control, i) {
                    control.clearNotification();
                });
        }

    }

// ***************************************************************************************************//