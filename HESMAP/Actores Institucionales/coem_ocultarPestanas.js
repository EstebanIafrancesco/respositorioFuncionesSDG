function HideAssistant() {

    try {



        var socialPane = document.getElementById('header_notescontrol') == null ? parent.document.getElementById('header_notescontrol') : document.getElementById('header_notescontrol');

        socialPane = socialPane == null ? window.parent.document.getElementById('header_notescontrol') : socialPane;

        socialPane = socialPane != null ? socialPane.getElementsByTagName('a') : socialPane;

        if (socialPane != null && socialPane.length > 0)

        {

            for (var i = 0; i < socialPane.length; i++) {

                var nodeText = socialPane[i].innerHTML != null ? socialPane[i].innerHTML : socialPane[i].innerText;

                nodeText = nodeText != null ? nodeText.toLowerCase() : "";
                //console.log(nodeText);

                if (nodeText == "assistant" || nodeText == "asistente" || nodeText == "publicaciones"  || nodeText == "actividades"  )

                {

                    socialPane[i].style.display = "none";

                }

            }

        }



    } catch (e) {

        console.log(e);

    }

}