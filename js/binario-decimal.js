
    var listaBin = [];
    var listaDec = [];
    //document.getElementById("decimal").innerHTML = bin2dec(POST);
    /*function marginTop(lenghtI){
        var ind = 10;        
        var i;
        
        for(i=0; i<lengthI; i++){
            ind = ind + 5;
            alert(lenghtI);  
        }   
        return ind;
    }*/

    function bin2dec(){
    // jQuery para validar se o texto é de números ou outros caracteres
        
        var ind = 12 ;
        for(var i=0; i<listaBin.length; i++){
            ind = ind + 10;
        }
    
        let bin = document.getElementById("bin").value;
        let dec = parseInt(bin, 2).toString(10);
        //var tamTop = marginTop(listaBin.length);
        //alert(tamTop);
        listaBin.push(bin);
        listaDec.push(dec);
       
           
        let newItemDec = document.createElement("div");
        let textDec = document.createTextNode(dec);
        newItemDec.appendChild(textDec);
        let divP = document.getElementById("hist");
        newItemDec.setAttribute("id","DivDec");

        divP.insertBefore(newItemDec,divP.childNodes[0]);
            
        let newItemBin = document.createElement("div");
        newItemBin.setAttribute("id","DivBin");
        let textBin = document.createTextNode(bin);
        newItemBin.appendChild(textBin);

        divP.insertBefore(newItemBin,divP.childNodes[0]);

        let stayleBin = document.getElementById("DivBin");
        stayleBin.setAttribute("style","color: rgb(104,90,90); position: absolute; left: 18%; margin-top:"+ind+"%");

        let stayleDec = document.getElementById("DivDec");
        stayleDec.setAttribute("style","color: rgb(104,90,90); position: absolute; left: 65%; margin-top:"+ind+"%");

        divP.insertAdjacentHTML("afterend","<br>");
            /*document.getElementById("prin").insertAdjacentHTML("afterend", "<div id= 'decimal' style= 'color: white; position: relative; right: 25%; margin-top: 15%;'></div>" );
            document.getElementById("decimal").innerHTML = listaDec[i]; 
            document.getElementById("prin").insertAdjacentHTML("afterend", "<div id='binario' style='color: white; position: relative; right: 66%; margin-top: 15%;'></div>");
            document.getElementById("binario").innerHTML = listaBin[i];*/
        
    }
   //console.log(typeof(parseInt(101, 2).toString(10))); 
