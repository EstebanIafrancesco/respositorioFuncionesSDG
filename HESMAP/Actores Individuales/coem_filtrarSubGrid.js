function filtroDireccionesSubgrid() {

    //debugger;
 
    filtroActorGrid();
 
 }
 
 function filtroActorGrid() {
 
    //debugger;
 
    var residencia = Xrm.Page.getAttribute("coem_direccionresidencia").getValue();
    var oficina	  = Xrm.Page.getAttribute("coem_direccionoficina").getValue();
 
    if (residencia != null && residencia != "" && oficina != null && oficina != "") {
 
        var objSubGrid = window.parent.document.getElementById("HistorialDirecciones"); //get the subgrid
 
        //CRM loads subgrid after form is loaded.. so when we are adding script on form load.. need to wait until sub grid is loaded.
 
        // that's why we are adding a delay..
 
        var isGridLoaded = null;
 
        try { isGridLoaded = objSubGrid.control.getEntityName(); }
 
        catch (err) {
 
            setTimeout(filtroActorGrid, 2000);
 
            return;
 
        }
 
        if (isGridLoaded != null) {
 
            residencia = residencia[0].name;
 
            residencia = residencia.replace('{', '').replace('}', '');
            console.log(residencia);
            
            oficina = oficina[0].name;
 
            oficina = oficina.replace('{', '').replace('}', '');
            console.log(oficina);
 
            var fetchXmlquery = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
 "  <entity name='coem_historialdirecciones'>" +
 "    <attribute name='coem_historialdireccionesid' />" +
 "    <attribute name='coem_tipodedireccin' />" +
 "    <attribute name='coem_estado' />" +
 "    <attribute name='coem_direccin' />" +
 "    <order attribute='coem_tipodedireccin' descending='false' />" +
 "    <filter type='and'>" +
 "      <filter type='and'>" +
 "        <condition attribute='coem_direccin' operator='not-null' />" +
 "        <condition attribute='coem_direccin' operator='ne' value='" + residencia + "' />" +
 "        <condition attribute='coem_direccin' operator='ne' value='" + oficina + "' />" +
 "      </filter>" +
 "    </filter>" +
 "  </entity>" +
 "</fetch>";
 
 
            objSubGrid.control.SetParameter("fetchXml", fetchXmlquery);
 
            //Refresh grid to show filtered records only.
 
            objSubGrid.control.Refresh();
 
        }
 
    }
 
 }