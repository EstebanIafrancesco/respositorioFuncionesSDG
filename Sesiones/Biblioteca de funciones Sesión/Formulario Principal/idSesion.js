// Secretaría de Gobierno de Bogotá
// By: Esteban Iafrancesco Arévalo
// email: esteban.iafrancesco@gobiernobogota.gov.co
// email1: esteban.iafrancesco@gmail.com
// 20082019


//********************************************************************************************/
// Función para construir el id de sesión

function idSesion(executionContext) {

    var formContext = executionContext.getFormContext();


    // Concatenación de Id Sesión Final
    var idSesion =  formatoFecha(executionContext) + horaProgramada(executionContext);
    // Control por consola 
    // console.log(idSesion);

    // Asignación de valor al campo id Sesión
    formContext.getAttribute("oap_id_sesion").setValue(idSesion);

}

//********************************************************************************************/
// Función para dar formato de número a fecha

function formatoFecha(executionContext){

    var formContext = executionContext.getFormContext();

    // Formato fecha para id
    var dateString = formContext.getAttribute("oap_fecha_de_sesion").getValue();
    var myDate = new Date(dateString);

    
        var dia = myDate.getDate();
        if (dia < 10){
            dia = "0" + dia;
        }   
        // Control por consola
        console.log(dia);
        
        
        var mes = (myDate.getMonth() + 1);
        if (mes < 10){
            mes = "0" + mes;
        }   
        // Control por consola
        console.log(mes);
    
        var anio = myDate.getFullYear();
        // Control por consola
        console.log(anio);

        var final_date = anio + "" + mes + "" + dia  ;
    

    
    // Fecha concatenada AaMmDd
    return final_date;
}

//********************************************************************************************/
// Función para seleccionar un id para los tres horarios de sesiones
function horaProgramada(executionContext){

    var formContext = executionContext.getFormContext();
    
    // Casos hora programada
    switch (formContext.getAttribute("oap_hora_programada").getValue()) {
        case 807700000:
            // Código de Sesión 1 para 9:00 
            var codigoSesion = 1;
            break;
        case 807700001:
            // Código de Sesión 2 para 14:00
            var codigoSesion = 2;
            break;
        case 807700002:
            // Código de Sesión 3 para 18:00
            var codigoSesion = 3;
            break;
        default:
        //var codigoSesion = null;
    }
    // Control por consola
    // console.log(codigoSesion);

    // Valor asignado segun horario
    return codigoSesion;
}