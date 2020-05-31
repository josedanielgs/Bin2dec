
    
    //document.getElementById("decimal").innerHTML = bin2dec(POST);
    

    function bin2dec(){
        let bin = document.getElementById("bin").value;
        document.getElementById("decimal").innerHTML = parseInt(bin, 2).toString(10);
        document.getElementById("binario").innerHTML = bin;
    }
   //console.log(typeof(parseInt(101, 2).toString(10))); 
