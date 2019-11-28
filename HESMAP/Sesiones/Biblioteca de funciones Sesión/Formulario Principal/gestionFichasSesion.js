// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 27082019

// Biblioteca de funciones para gestionar Fichas en el formulario de Sesiones

// Selector de ficha

function selectorDeFicha(executionContext){
    let formContext = executionContext.getFormContext();
    let clase = formContext.getAttribute("oap_clase").getValue();
    // Control por consola
    console.log(clase);

    // Selector pestañas Proyectos de Acuerdo
    if(clase == 807700000){
        pestanasPAVisible(executionContext);
    }

    // Selector pestañas Control Político
    if(clase == 807700001){
        pestanasCPVisible(executionContext);
    }

    // Selector Otro
    if(clase == 807700002){
        otro(executionContext);
    }
}


//**************************************************************************************************/
// Función ocultar/mostrar Agenda y Asistencia en Proyectos de Acuerdo.

function pestanasPAVisible(executionContext){

    let formContext = executionContext.getFormContext();
    // Mostrar Agenda y Asistencia Proyectos de Acuerdo.
    formContext.ui.tabs.get("Agenda Proyectos de Acuerdo").setVisible(true);
    formContext.ui.tabs.get("Asistencia Entidades Proyectos de Acuerdo").setVisible(true);
    formContext.ui.tabs.get("Ponentes").setVisible(true);
    formContext.ui.tabs.get("Votaciones").setVisible(true);

    // Ocultar Agenda y Asistencia Control Político
    formContext.ui.tabs.get("Agenda Control Político").setVisible(false);
    formContext.ui.tabs.get("Asistencia Entidades Control Político").setVisible(false);

}

//**************************************************************************************************/
// Función ocultar/mostrar Agenda y Asistencia en Control Político

function pestanasCPVisible(executionContext){
    
    let formContext = executionContext.getFormContext();
    // Mostrar Agenda y Asistencia Control Político.
    formContext.ui.tabs.get("Agenda Control Político").setVisible(true);
    formContext.ui.tabs.get("Asistencia Entidades Control Político").setVisible(true);
    formContext.ui.tabs.get("Estado del debate").setVisible(true);

    // Ocultar Campos no reacionados con Control Político
    formContext.ui.tabs.get("Agenda Proyectos de Acuerdo").setVisible(false);
    formContext.ui.tabs.get("Asistencia Entidades Proyectos de Acuerdo").setVisible(false);
    formContext.ui.tabs.get("Ponentes").setVisible(false);
    formContext.ui.tabs.get("Votaciones").setVisible(false);

}

//**************************************************************************************************/
// Función para ocultar pestañas de CP y PA en caso de clase == otro

function otro(executionContext){

    let formContext = executionContext.getFormContext();

    // Ocultar Agenda y Asistencia Proyectos de Acuerdo
    formContext.ui.tabs.get("Agenda Proyectos de Acuerdo").setVisible(false);
    formContext.ui.tabs.get("Asistencia Entidades Proyectos de Acuerdo").setVisible(false);
    formContext.ui.tabs.get("Estado del debate").setVisible(false);
    formContext.ui.tabs.get("Ponentes").setVisible(false);
    formContext.ui.tabs.get("Votaciones").setVisible(false);

    // Ocultar Agenda y Asistencia Control Político
    formContext.ui.tabs.get("Agenda Control Político").setVisible(false);
    formContext.ui.tabs.get("Asistencia Entidades Control Político").setVisible(false);
}

// ***************************************************************************************************//