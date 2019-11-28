// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 26082019


// ***************************************************************************************************//
// DP := Derechos de Petición
// ***************************************************************************************************//

// Función para definir id de los DP 
function idDerechosDePeticion(executionContext) {

    var formContext = executionContext.getFormContext();

    // Año para id tomado de la fecha 
    var dateString = formContext.getAttribute("oap_fecha_recibo").getValue();
    var myDate = new Date(dateString);
    
    // Año del DP
    var anio = myDate.getFullYear();
    // Control por consola
    console.log(anio);
    // Número del DP
    var derechoDePeticion = formContext.getAttribute("oap_derecho_de_peticion").getValue();
    console.log(derechoDePeticion);
    // Asignación de valor al campo Id del DP
    var idDerechoDePeticion = derechoDePeticion + "-" + anio;
    formContext.getAttribute("oap_id_derechos_de_peticion").setValue(idDerechoDePeticion);
    // Control de valor por consola
    console.log(idDerechoDePeticion);
}

// ***************************************************************************************************//
// Función para asignar el valor de año automáticamente

function anioDerechoDePeticion(executionContext) {

    var formContext = executionContext.getFormContext();

    // Año para id tomado de la fecha 
    if(formContext.getAttribute("oap_fecha_recibo").getValue() != null){
        
        var dateString = formContext.getAttribute("oap_fecha_recibo").getValue();
        var myDate = new Date(dateString);
        
        // Año del DP
        var anio = myDate.getFullYear();
        // Control por consola
        console.log(anio);
    
        // Asignación de valor al campo Año del DP
        formContext.getAttribute("oap_anio").setValue(anio);
        // Visibilización del camp Año
        formContext.getControl("oap_anio").setVisible(true);
        
    }
   
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
// Funciones de Ocultar y Visibilizar campos en el formulario principal sección izquierda

function ocultarVisibilizarCampos(executionContext){

    var formContext = executionContext.getFormContext();
    // Verificar si asunto tiene valor
    if(formContext.getAttribute("oap_asunto_dp").getValue() != null){
        
        // Visibiliza Tema
        formContext.getControl("oap_tema").setVisible(true); 

        // Visibiliza Observaciones
        formContext.getControl("oap_observaciones_dp").setVisible(true);

    }else{
        
        //Reinicia y oculta el campo Tema
        formContext.getAttribute("oap_tema").setValue(null);
        formContext.getControl("oap_tema").setVisible(false);

        //Reinicia y oculta el campo Observaciones
        formContext.getAttribute("oap_observaciones_dp").setValue(null); 
        formContext.getControl("oap_observaciones_dp").setVisible(false);

        //Reinicia y oculta el campo Subtema        
        formContext.getAttribute("oap_subtema").setValue(null);
        formContext.getControl("oap_subtema").setVisible(false);

    }
}   
   
// ***************************************************************************************************//
// Funciones de Ocultar y Visibilizar campos en el formulario principal sección central
function seccionCentralFormDP(executionContext){

    var formContext = executionContext.getFormContext();
    // Verificar si asunto tiene valor
    if(formContext.getAttribute("oap_fecha_de_respuesta").getValue() != null){
        
        // Si traslados contiene datos visibilizar "Prórroga" y "Número de radicado de prórroga".
        formContext.getControl("oap_prorroga").setVisible(true); 
        formContext.getControl("oap_numero_de_radicado_prorroga_dp").setVisible(true); 

    }else{
        //Oculta los campos "Prórroga" y "Número de radicado de prórroga".        
        formContext.getControl("oap_prorroga").setVisible(false);
        formContext.getControl("oap_numero_de_radicado_prorroga_dp").setVisible(false);

    }
}
// ***************************************************************************************************//
    // Función para obtener el campo bancada automáticamente

    function partidoSegunAutor(executionContext){
        let formContext = executionContext.getFormContext();
        let concejal = formContext.getAttribute("oap_concejal").getValue();
        // Control por consola
        console.log(concejal);
        if (concejal != null){
            formContext.getAttribute("oap_bancada").setValue(concejal[0].keyValues.coem_partido.value);
            //formContext.getControl("oap_bancada").getVisible(true);
        }else{
            formContext.getAttribute("oap_bancada").setValue(null);
            //formContext.getControl("oap_bancada").getVisible(false);
        }
        console.log(concejal);
        
    }

    // ***************************************************************************************************//