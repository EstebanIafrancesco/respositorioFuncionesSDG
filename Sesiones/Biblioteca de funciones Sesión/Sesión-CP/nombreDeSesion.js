// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 21082019

//****************************************************************************************************/
// Función para diligenciar automáticamente  el nombre del campo principal en Sesión-CP
function nombreDeSesion(executionContext){

    var formContext = executionContext.getFormContext();
    var nombreSesion = "Proposición guardada"; 
    // Control por consola
    // console.log(nombreSesion);
    
    // Asignación de valor para nombre
    formContext.getAttribute("oap_name").setValue(nombreSesion);
}