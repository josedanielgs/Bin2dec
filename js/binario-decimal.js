
    
    //document.getElementById("decimal").innerHTML = bin2dec(POST);
    
    
    function bin2dec(){
    // jQuery para validar se o texto é de números ou outros caracteres
        let bin = document.getElementById("bin").value;
        let dec = parseInt(bin, 2).toString(10);
        let listaBin = [];
        let listaDec = [];
        listaBin.push(bin);
        listaDec.push(dec);

        for(var i=0; i<listaBin.length; i++){    
            let newItemDec = document.createElement("div");
            let textDec = document.createTextNode(listaDec[i]);
            newItemDec.appendChild(textDec);
            let divP = document.getElementById("ok");

            divP.insertBefore(newItemDec,divP.childNodes[i]);
            
            let newItemBin = document.createElement("div",);
            let textBin = document.createTextNode(listaBin[i]);
            newItemBin.appendChild(textBin);

            divP.insertBefore(newItemBin,divP.childNodes[i]);

            /*document.getElementById("prin").insertAdjacentHTML("afterend", "<div id= 'decimal' style= 'color: white; position: relative; right: 25%; margin-top: 15%;'></div>" );
            document.getElementById("decimal").innerHTML = listaDec[i]; 
            document.getElementById("prin").insertAdjacentHTML("afterend", "<div id='binario' style='color: white; position: relative; right: 66%; margin-top: 15%;'></div>");
            document.getElementById("binario").innerHTML = listaBin[i];*/
        }
    }
   //console.log(typeof(parseInt(101, 2).toString(10))); 
