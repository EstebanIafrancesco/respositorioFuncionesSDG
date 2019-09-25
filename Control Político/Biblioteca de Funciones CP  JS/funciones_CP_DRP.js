// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 13062019

// ***************************************************************************************************//
// CP := Control Político
// ***************************************************************************************************//

// Función para definir id de las proposiciones en CP 
function idProposiciones() { 

    // Número de la proposición
    var proposicion = Xrm.Page.getAttribute("oap_proposicion").getValue();
    // Año de la proposición
    var anio = Xrm.Page.getAttribute("oap_anio").getValue();
    // Asignación de valor al campo Id de la proposición
    var idProposicion = proposicion + "-" + anio;
    Xrm.Page.getAttribute("oap_id_proposicion").setValue(idProposicion);
    // Control de valor por consola
    console.log(idProposicion);
}

// ***************************************************************************************************//
// Función para cambiar Título a mayúsculas en CP

function tituloEnMayusculas() {

    if (Xrm.Page.getAttribute("oap_titulo").getValue() != null) {

        // Variable título en CP
        var titulo = Xrm.Page.getAttribute("oap_titulo").getValue();
        // Conversión de título a mayúsculas
        var tituloMayusculas = titulo.toUpperCase();
        Xrm.Page.getAttribute("oap_titulo").setValue(tituloMayusculas);

    }

}

// ***************************************************************************************************//

// Función para validar que el campo Orfeo de respuesta sea únicamente numérico en CP y que no supere
// los 14 números

function orfeoNumerico() {

    var orfeoNum = Xrm.Page.getAttribute("oap_orfeo_de_respuesta");
    var mensaje = "";

    orfeoNum.controls.forEach(
        function (control, i) {
            control.clearNotification();
        });

    if (orfeoNum.getValue() != null) {
        var value = orfeoNum.getValue();
        var formattedValue = value.replace(/\s+/g, '');
        orfeoNum.setValue(formattedValue);
        var numbers = /^[0-9]+$/;

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

// ***************************************************************************************************//
// DP := Derechos de Petición
// ***************************************************************************************************//

// Función para definir id de los DP 
function idDerechosDePeticion() {


    // Año del DP
    var anio = Xrm.Page.getAttribute("oap_anio").getValue();
    console.log(anio);
    // Número del DP
    var derechoDePeticion = Xrm.Page.getAttribute("oap_derecho_de_peticion").getValue();
    console.log(derechoDePeticion);
    // Asignación de valor al campo Id del DP
    var idDerechoDePeticion = derechoDePeticion + "-" + anio;
    Xrm.Page.getAttribute("oap_id_derechos_de_peticion").setValue(idDerechoDePeticion);
    // Control de valor por consola
    console.log(idDerechoDePeticion);
}

// ***************************************************************************************************//
// Función para cambiar Asunto a mayúsculas en DP

function asuntoEnMayusculas() {

    if (Xrm.Page.getAttribute("oap_asunto_dp").getValue() != null) {

        // Variable Asunto en DP
        var asunto = Xrm.Page.getAttribute("oap_asunto_dp").getValue();
        // Conversión de Asunto a mayúsculas
        var asuntoMayusculas = asunto.toUpperCase();
        Xrm.Page.getAttribute("oap_asunto_dp").setValue(asuntoMayusculas);

    }

}

// ***************************************************************************************************//

// Función para cambiar Observaciones a mayúsculas en DP

function observacionesEnMayusculas() {

    if (Xrm.Page.getAttribute("oap_observaciones_dp").getValue() != null) {

        // Variable Observaciones en DP
        var observaciones = Xrm.Page.getAttribute("oap_observaciones_dp").getValue();
        // Conversión de Observaciones a mayúsculas
        var observacionesMayusculas = observaciones.toUpperCase();
        Xrm.Page.getAttribute("oap_observaciones_dp").setValue(observacionesMayusculas);

    }

}

// ***************************************************************************************************//

// Función para cambiar el asunto de los Derechos de Petición a mayúsculas

function asuntoDPEnMayusculas() {

    if (Xrm.Page.getAttribute("oap_asunto_dp").getValue() != null) {

        // Variable Asunto en DP
        var asunto = Xrm.Page.getAttribute("oap_asunto_dp").getValue();
        // Conversión de Asunto a mayúsculas
        var asuntoMayusculas = asunto.toUpperCase();
        Xrm.Page.getAttribute("oap_asunto_dp").setValue(asuntoMayusculas);

    }

}
// ***************************************************************************************************//
// Función para verificar orfeo de radicado en DP

function orfeoRadicadoDP() {

    var orfeoNum = Xrm.Page.getAttribute("oap_numero_de_radicado_dp");
    var mensaje = "";

    orfeoNum.controls.forEach(
        function (control, i) {
            control.clearNotification();
        });

    if (orfeoNum.getValue() != null) {
        var value = orfeoNum.getValue();
        var formattedValue = value.replace(/\s+/g, '');
        orfeoNum.setValue(formattedValue);
        var numbers = /^[0-9]+$/;

        if (!formattedValue.match(numbers)) {
            mensaje = "El Orfeo debe contener sólo números";
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

// ***************************************************************************************************//
// Función para verificar orfeo de prórroga en DP

function orfeoProrrogaDP() {

    var orfeoNum = Xrm.Page.getAttribute("oap_numero_de_radicado_prorroga_dp");
    var mensaje = "";

    orfeoNum.controls.forEach(
        function (control, i) {
            control.clearNotification();
        });

    if (orfeoNum.getValue() != null) {
        var value = orfeoNum.getValue();
        var formattedValue = value.replace(/\s+/g, '');
        orfeoNum.setValue(formattedValue);
        var numbers = /^[0-9]+$/;

        if (!formattedValue.match(numbers)) {
            mensaje = "El Orfeo de prórroga debe contener sólo números";
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

// ***************************************************************************************************//
// Función para verificar orfeo de radicado final en DP

function orfeoRadicadoFinalDP() {

    var orfeoNum = Xrm.Page.getAttribute("oap_numero_de_radicado_final_dp");
    var mensaje = "";

    orfeoNum.controls.forEach(
        function (control, i) {
            control.clearNotification();
        });

    if (orfeoNum.getValue() != null) {
        var value = orfeoNum.getValue();
        var formattedValue = value.replace(/\s+/g, '');
        orfeoNum.setValue(formattedValue);
        var numbers = /^[0-9]+$/;

        if (!formattedValue.match(numbers)) {
            mensaje = "El Orfeo de radicado final debe contener sólo números";
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

// ***************************************************************************************************//

// Función para definir la Bancada según el Citante

function partidoSegunAutor(executionContext){
    let formContext = executionContext.getFormContext();
    let citante = formContext.getAttribute("oap_citante").getValue();
    // Control por consola
    console.log("*****************************");
    console.log(citante);
    console.log("*****************************");
    
    if (citante != null){
        //Control por consola
        console.log(citante[0].keyValues.coem_partido.value);
        formContext.getAttribute("oap_bancada").setValue(citante[0].keyValues.coem_partido.value);
        formContext.getControl("oap_bancada").setVisible(true);
        formContext.getControl("oap_bancada").setDisabled(true);
    }else{
        formContext.getAttribute("oap_bancada").setValue(null);
        formContext.getControl("oap_bancada").setVisible(false);
    }
 }

// ***************************************************************************************************//







