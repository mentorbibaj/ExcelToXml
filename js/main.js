$(document).ready(function(){
    
	var number = 0;

    $("#details").click(function(){
        number = document.getElementById("cols").value!=""?document.getElementById("cols").value:1;

        var container = document.getElementById("container");

        var inputs = document.getElementById("inputs");
        while (inputs.hasChildNodes()) {
            inputs.removeChild(inputs.lastChild);
        }

        inputs.appendChild(document.createTextNode("Root Object: "));
        var rootObj   = document.createElement("input");
        rootObj.type  = "text";
        rootObj.name  = "rootObj";
        rootObj.id    = "rootObj";
        rootObj.required = "true";
        rootObj.value = localStorage.getItem("rootobject") != null ? 
                        localStorage.getItem("rootobject"):"Root";
        inputs.appendChild(rootObj);

        for (i=0;i<number;i++){
            inputs.appendChild(document.createTextNode("Col " + (i+1)+" Caption:"));
            var input = document.createElement("input");
            input.type = "text";
            input.name = "col[" + i +"]";
            input.required = "true";
            input.id = "col" + i;
            input.value=localStorage.getItem(("col"+i));
            inputs.appendChild(input);
        }

        inputs.appendChild(document.createTextNode("Excel Destination:"));
        var excelfiledest = document.createElement("input");
        excelfiledest.type="text";
        excelfiledest.name="exceldest";
        excelfiledest.id="exceldest";
        excelfiledest.required = "true";
        excelfiledest.value= localStorage.getItem("exceldestination") != null ? 
                             localStorage.getItem("exceldestination"):"C:\\folder\\excel.xls";
        inputs.appendChild(excelfiledest);

        inputs.appendChild(document.createTextNode("To Destination:"));
        var typefiledest = document.createElement("input");
        typefiledest.type="text";
        typefiledest.name="typedest";
        typefiledest.id= "typedest";
        typefiledest.required = "true";
        typefiledest.value= localStorage.getItem("filedestination") != null ? 
                            localStorage.getItem("filedestination"):"C:\\folder\\file.xml";
        inputs.appendChild(typefiledest);

        inputs.appendChild(document.createTextNode("Start From Row:"));
        var startfrom = document.createElement("input");
        startfrom.type="number";
        startfrom.name="startfrom";
        startfrom.id="startfrom";
        startfrom.min=1;
        startfrom.required = "true";
        startfrom.value=localStorage.getItem("startfromrow") != null ? 
                        localStorage.getItem("startfromrow"):1;
        inputs.appendChild(startfrom);

        var submitBtn = document.createElement("button");
        submitBtn.type = "submit";
        submitBtn.id = "submitBtn"
        submitBtn.innerText = "Generate";
        inputs.appendChild(submitBtn);

        container.appendChild(inputs);
    });

    $("#container").submit(function() {
        //+
        event.preventDefault();
        var formData = $('#container').serialize();
        //-
        $.ajax({
            type: 'GET',
            url: $('#container').attr('action'),
            data: formData
        }).done(function(response) {
            $("#errorOrSuccess").removeClass('redParagraph');
            $("#errorOrSuccess").addClass('greenParagraph');
            $("#errorOrSuccess").text('ExcelToXML has been successfully generated!');
            $("#loader").removeClass('loader');
            $("#submitBtn").removeAttr('disabled');
        }).fail(function(data) {
            $("#errorOrSuccess").removeClass('greenParagraph');
            $("#errorOrSuccess").addClass('redParagraph');
            if (data.responseText !== '') {
                $("#errorOrSuccess").text(data.responseText);
            }else{
                $("#errorOrSuccess").text('Oops! An error occured ExcelToXML could not be generated.');
            }
            $("#loader").removeClass('loader');
            $("#submitBtn").removeAttr('disabled');
        });

        localStorage.setItem("exceldestination", $('#exceldest').val());
        localStorage.setItem("filedestination", $('#typedest').val());
        localStorage.setItem("rootobject", $('#rootObj').val());
        localStorage.setItem("startfromrow", $('#startfrom').val());

        for (var i = 0; i < number; i++) {
        	var name = "col" + i;
        	localStorage.setItem(name, $("#"+name).val());
        }

        window.scrollTo(0, 0);
        $("#loader").addClass('loader');
        $("#errorOrSuccess").text("");
        $("#errorOrSuccess").removeClass('greenParagraph');
        $("#errorOrSuccess").removeClass('redParagraph');
    });

});