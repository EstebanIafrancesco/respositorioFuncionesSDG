    // Secretaría de Gobierno de Bogotá
    // By: Esteban Iafrancesco Arévalo
    // email: esteban.iafrancesco@gobiernobogota.gov.co
    // email1: esteban.iafrancesco@gmail.com
    // 17092019

    // ***************************************************************************************************//
    // Bibliteca de funciones para el formulario de Editoriales
    // ***************************************************************************************************//

    // Función para obtener el campo bancada automáticamente

    function partidoSegunAutor(executionContext){
        let formContext = executionContext.getFormContext();
        let concejal = formContext.getAttribute("oap_concejal").getValue();
        // Control por consola
        console.log(concejal);
        if (concejal != null){
            formContext.getAttribute("oap_bancada").setValue(concejal[0].keyValues.coem_partido.value);
            formContext.getControl("oap_bancada").setVisible(true);
            formContext.getControl("oap_bancada").setDisabled(true);
            
        }else{
            formContext.getAttribute("oap_bancada").setValue(null);
            formContext.getControl("oap_bancada").setVisible(false);
            formContext.getControl("oap_bancada").setDisabled(false);
        }
        
    }
    // ***************************************************************************************************//


    // Función para rellenar el campo nombre automáticamente

    function nombre(executionContext){
        let formContext = executionContext.getFormContext();

        let propietario = formContext.getAttribute("ownerid").getValue();
        // Control por consola
        console.log(propietario[0].name);
        let sesion = formContext.getAttribute("oap_sesion").getValue();
        // Control por consola
        console.log(sesion[0].name);
        // Control de cambios
        formContext.getAttribute("oap_name").setValue("La sesión " + sesion[0].name + ", fue modificada por: "  + propietario[0].name);
        // Fecha de modificación
        let fechaModificacion = formContext.getAttribute("modifiedon").getValue();
        console.log(fechaModificacion);
        //Control por consola
        console.log("La sesión " + sesion[0].name + " fue modificada por: " + propietario[0].name  + " el " + fechaModificacion);
    }
// ***************************************************************************************************//