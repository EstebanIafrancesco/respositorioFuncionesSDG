function validateEmail() {
    //replace the attribute used to suit your field
        var email = Xrm.Page.getAttribute("emailaddress1");
        var mensaje = "";
        
        email.controls.forEach(
                function (control, i){
                    control.clearNotification();
                });
        
        if(email.getValue() != null){
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if(re.test(email.getValue()) == false) {
                  mensaje = "Escriba una dirección de correo electrónico válida.";
                  //Xrm.Page.getAttribute("emailaddress1").setValue("");
                }
           }
        if (mensaje != "")
            {
                email.controls.forEach(
                function (control, i){
                    control.setNotification(mensaje);
                });
            }
            else
            {
                email.controls.forEach(
                function (control, i){
                    control.clearNotification();
                });
            }
    }
    
    function validateEmailasistente() {
    //replace the attribute used to suit your field
        var email = Xrm.Page.getAttribute("coem_emailasistente");
        var mensaje = "";
            
        email.controls.forEach(
            function (control, i){
            control.clearNotification();
        });
        
        if(email.getValue() != null){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(email.getValue()) == false) {
                mensaje = "Escriba una dirección de correo electrónico válida.";
                //Xrm.Page.getAttribute("emailaddress1").setValue("");
            }
        }
        
        if (mensaje != ""){
            email.controls.forEach(
            function (control, i){
            control.setNotification(mensaje);
              });
        }
        else{
            email.controls.forEach(
            function (control, i){
            control.clearNotification();
            });
        }
    }
    
    function validateEmailasesor() {
    //replace the attribute used to suit your field
        var email = Xrm.Page.getAttribute("coem_emailasesor");
        var mensaje = "";
            
        email.controls.forEach(
            function (control, i){
            control.clearNotification();
        });
        
        if(email.getValue() != null){
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test(email.getValue()) == false) {
                mensaje = "Escriba una dirección de correo electrónico válida.";
                //Xrm.Page.getAttribute("emailaddress1").setValue("");
            }
        }
        
        if (mensaje != ""){
            email.controls.forEach(
            function (control, i){
            control.setNotification(mensaje);
              });
        }
        else{
            email.controls.forEach(
            function (control, i){
            control.clearNotification();
            });
        }
    }
    
    //websiteurl- Validar url
    function ValidarURL(context) {
        var webUrl = Xrm.Page.getAttribute(context.getEventSource().getName()).getValue();
        if (webUrl != null && webUrl.substring(0,7) != "http://" &&  webUrl.substring(0,7) != "https:/") {
            Xrm.Page.getAttribute(context.getEventSource().getName()).setValue(" " + webUrl);
        }
    } 