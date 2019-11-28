// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 31102019

// ***************************************************************************************************//
// AN := Asuntos Normativos
// ***************************************************************************************************//

// Función para cambiar Título a mayúsculas en AN

function tituloEnMayusculas(executionContext) {
    
    let formContext = executionContext.getFormContext();

    if (formContext.getAttribute("oap_titulo").getValue() != null) {

        // Variable título en CP
        let titulo = formContext.getAttribute("oap_titulo").getValue();
        // Conversión de título a mayúsculas
        let tituloMayusculas = titulo.toUpperCase();
        formContext.getAttribute("oap_titulo").setValue(tituloMayusculas);

    }

}

// ***************************************************************************************************//
// Función para validar que el campo radicado sea únicamente numérico en CP y que no supere
// los 14 números

function orfeoNumerico(executionContext) {

    let formContext = executionContext.getFormContext();
    let orfeoNum = formContext.getAttribute("oap_radicado");
    let mensaje = "";

    orfeoNum.controls.forEach(
        function (control, i) {
            control.clearNotification();
        });

    if (orfeoNum.getValue() != null) {
        let value = orfeoNum.getValue();
        let formattedValue = value.replace(/\s+/g, '');
        orfeoNum.setValue(formattedValue);
        let numbers = /^[0-9]+$/;

        if (!formattedValue.match(numbers)) {
            mensaje = "El Orfeo de respuesta debe contener sólo números";
            orfeoNum.setValue(null);
        }
        else if (formattedValue.length != 14) {
            mensaje = "La longitud del número ingresado es incorrecta";
        }
    }

    if (mensaje != "") {
        orfeoNum.controls.forEach(
            function (control, i) {
                control.setNotification(mensaje);
            });
    }
    else {
        orfeoNum.controls.forEach(
            function (control, i) {
                control.clearNotification();
            });
    }
}

// *************************************************************************************************//
// Función para definir la Bancada según el Citante

function partidoSegunAutor(executionContext){
    let formContext = executionContext.getFormContext();
    let citante = formContext.getAttribute("oap_autor").getValue();
    // Control por consola
    console.log("*****************************");
    console.log(citante);
    console.log("*****************************");
    
    if (citante != null || citante != "undefined"){
        //Control por consola
        console.log(citante[0].keyValues.coem_partido.value);
        formContext.getAttribute("oap_partidopolitico").setValue(citante[0].keyValues.coem_partido.value);
        formContext.getControl("oap_partidopolitico").setVisible(true);
        formContext.getControl("oap_partidopolitico").setDisabled(true);
    }else{
        formContext.getAttribute("oap_partidopolitico").setValue(null);
        formContext.getControl("oap_partidopolitico").setVisible(false);
    }
 }
// ********************************************************************************//

 // Función para controlar el cambio de tema en formulario de AN

function controlCambioTema(executionContext) {
    
    // Contexto de ejecución
    let formContext = executionContext.getFormContext();
    let subtema = formContext.getAttribute("oap_subtema").getValue();
    // Control por consola
    console.log(subtema);
    
    // Si hay un cambio en el tema resetear el valor subtema 
    if (subtema != null) {

        formContext.getAttribute("oap_subtema").setValue(null);
        formContext.ui.controls.get("oap_subtema").setVisible(false);

    }

}

//******************************************************************************************************************//

// Función para definir id de los proyectos de acuerdo en AN
function idProyectosDeAcuerdo(executionContext) { 

    // Número del PA
    let formContext = executionContext.getFormContext();
    let proyecto = formContext.getAttribute("oap_proyecto").getValue();

    // Año de la proposición
    let anio = formContext.getAttribute("oap_anio").getValue();
    // Asignación de valor al campo Id de la proposición
    let idProyecto = proyecto + "-" + anio;
    formContext.getAttribute("oap_id_proyecto").setValue(idProyecto);
    // Control de valor por consola
    console.log(idProyecto);
}

    