var vet = [];
var vet2 = [];
var media = []
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

function calcular(){
	media();
}
function media(){
	var i = 0 ;
	var soma=0;
	var media=0;
	for(i=0;i<vet.length;i++){
		soma = soma +  vet[i]
	}
	media = (soma/vet.length)
	alert(media) 
}
function ordena(){
    vet2 =  localStorage.getItem("vetor")
    document.getElementById("saida1").innerHTML = vet2

}

function nomeP(){
	nomeP = localStorage.getItem("nomeVariavelDePesquisa")
    document.getElementById("saida2").innerHTML = nomeP

}




function abrepg(link){
	window.location.href=link//           ------   isso faz com que abra o link na msm pagina ----
	//window.open(link);// isso faz com que abra o link em uma nova guia
}

function voltarDescritiva(link){
	window.location.href=link
}
function avancar(link){
	nomeP = document.getElementById("nomeP").value

	 localStorage.setItem("nomeVariavelDePesquisa", nomeP)
	window.location.href=link//           ------   isso faz com que abra o link na msm pagina ----
	//window.open(link);// isso faz com que abra o link em uma nova guia
}
