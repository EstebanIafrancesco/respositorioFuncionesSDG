function  OnChangeTipoActor(){
	if (Xrm.Page.getAttribute("coem_tipoactor").getValue() != null)
	{
		var tipoactor = Xrm.Page.getAttribute("coem_tipoactor").getValue()[0].name;
		if(tipoactor == "Actor político"){
			Xrm.Page.ui.tabs.get("AditionalDetails").setVisible(true);
			Xrm.Page.ui.tabs.get("infoProyectos").setVisible(true);
			Xrm.Page.ui.tabs.get("DETAILS_TAB").setVisible(false);
		}
		else if(tipoactor == "Actor administrativo"){
			Xrm.Page.ui.tabs.get("AditionalDetails").setVisible(false);
			Xrm.Page.ui.tabs.get("infoProyectos").setVisible(false);
			Xrm.Page.ui.tabs.get("DETAILS_TAB").setVisible(false);
		}
		else if(tipoactor == "Actor social"){
			Xrm.Page.ui.tabs.get("AditionalDetails").setVisible(false);
			Xrm.Page.ui.tabs.get("infoProyectos").setVisible(false);
			Xrm.Page.ui.tabs.get("DETAILS_TAB").setVisible(true);
		}
	}
}
