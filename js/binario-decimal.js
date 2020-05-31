
    
    //document.getElementById("decimal").innerHTML = bin2dec(POST);
    
    alert("A mensagem enviada foi: ");
    function bin2dec(){
        let bin = document.getElementById("bin");
        document.getElementById("decimal").innerHTML = parseInt(bin, 2).toString(10);
    }
    
   //console.log(typeof(parseInt(101, 2).toString(10))); 
