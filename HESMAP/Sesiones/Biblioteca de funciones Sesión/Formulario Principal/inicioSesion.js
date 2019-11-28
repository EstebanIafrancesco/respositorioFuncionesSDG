// Inicio de Sesión
// Verificar si hay valor en los campos Control político y Proyectos de acuerdo

function notification(executionContext){
    let formContext = executionContext.getFormContext();
    let clase = formContext.getAttribute("oap_clase").getValue();
    if(clase == 807700000){
        console.log(clase);
        // Mostrar Agenda y Asistencia Proyectos de Acuerdo.
        formContext.ui.tabs.get("Agenda Proyectos de Acuerdo").setVisible(true);
        formContext.ui.tabs.get("Asistencia Entidades Proyectos de Acuerdo").setVisible(true);
        formContext.ui.tabs.get("Ponentes").setVisible(true);
        formContext.ui.tabs.get("Votaciones").setVisible(true);
    }
    if (clase == 807700001){
        // Mostrar Agenda y Asistencia Control Político.
        formContext.ui.tabs.get("Agenda Control Político").setVisible(true);
        formContext.ui.tabs.get("Asistencia Entidades Control Político").setVisible(true);
        formContext.ui.tabs.get("Estado del debate").setVisible(true);
    }
    if (clase == 807700001){
        // Ocultar Agenda y Asistencia Proyectos de Acuerdo
        formContext.ui.tabs.get("Asistencia Entidades Proyectos de Acuerdo").setVisible(false);
        formContext.ui.tabs.get("Estado del debate").setVisible(false);
        formContext.ui.tabs.get("Ponentes").setVisible(false);
        formContext.ui.tabs.get("Votaciones").setVisible(false);
    }
}
// ***************************************************************************************************//


