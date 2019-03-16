var vet = [];
var vet2 = [];
var ordens = [];
function adiciona(){
	var dadosN = Number(document.getElementById("dadosN").value);
	
		vet.push(dadosN);
	    document.getElementById("saida").innerHTML = dadosN + " adicionado ";	         
			//agora vai ordena
	        var aux = 0;
	        for (var i = 0; i < vet.length; i++) {
	            for(var j = i; j < vet.length; j++){
	                    if(vet[i] > vet[j]){
	                        aux = vet[j];
	                        vet[j] = vet[i];
	                        vet[i] = aux;       
	                    }
	            }
	 
	        }
    //ja esta ordenado
    localStorage.setItem("vetor", vet)

  
}
function adicionaOrdem(){

	var ordem = document.getElementById("ordem").value;
	
		ordens.push(ordem);
	    document.getElementById("saidaOrdem").innerHTML = ordem + " adicionado ";
	    localStorage.setItem("ordem", ordens)
	

}

function ordena(){
    vet2 =  localStorage.getItem("vetor")
    document.getElementById("saida1").innerHTML = vet2

}

function nomeP(){
	nomeP = localStorage.getItem("nomeVariavelDePesquisa")
    document.getElementById("saida2").innerHTML = nomeP

}
function mostrarOrdem(){
	ordens = localStorage.getItem("ordem");
	document.getElementById("mostrarOrdem").innerHTML = ordens
}




function abrepg(link){
	window.location.href=link//           ------   isso faz com que abra o link na msm pagina ----
	//window.open(link);// isso faz com que abra o link em uma nova guia
}

function voltarDescritiva(link){
	window.location.href=link
	localStorage.removeItem("nomeVariavelDePesquisa")
	localStorage.removeItem("ordem")
	localStorage.removeItem("vetor")
	
}
function calcular(link){
	nomeP = document.getElementById("nomeP").value

	 localStorage.setItem("nomeVariavelDePesquisa", nomeP)
	window.location.href=link//           ------   isso faz com que abra o link na msm pagina ----
	//window.open(link);// isso faz com que abra o link em uma nova guia
}
