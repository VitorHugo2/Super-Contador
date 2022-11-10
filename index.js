


function contar(){
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passo = document.getElementById("passo").value
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 ){
        alert("Verifique os campos e tente novamente")
    }else{
        ini = Number(inicio)
        fi = Number(fim)
        pass = Number(passo)

        if(pass <= 0){
            pass = 1
            alert("Valor invalido. Considerando 1 como valor!")
        }
            
            document.getElementById("passo").value = "1"
        
            document.getElementById("resposta").innerHTML = ""
            if(ini > fi){
                
                for(var i = ini; i > fi; i -= pass){
                    document.getElementById("resposta").innerHTML += `${i}&#128073`
                } 
            }else{
                for(var i = ini; i < fi; i += pass){
                    document.getElementById("resposta").innerHTML += `${i}&#128073`
                }   
            }
        

        
        
        
        document.getElementById("resposta").innerHTML += `&#128681`

    }
}