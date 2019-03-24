var vet = [];
var vet2 = [];
var ordens = [];


function adiciona(){
	var dadosN = document.getElementById("dadosN").value;
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

function media(){
	var soma = 0
	var media = 0 
	numeros = vet
	for(var i=0; i<numeros.length;i++){
		soma = soma + numeros[i]
	}
	media = (soma / numeros.length)
	if(isNaN(media) == true){
		media = ("Não tem media")
		media = localStorage.setItem("media" , media)
		
	}
	else{
	 media = localStorage.setItem("media" , media)
	}
}
function mostrarMedia(){
	media = localStorage.getItem("media");
	document.getElementById("mostrarMedia").innerHTML = ("A media é " + media)
}

function voltarDescritiva(link){
	window.location.href=link
	localStorage.removeItem("nomeVariavelDePesquisa")
	localStorage.removeItem("ordem")
	localStorage.removeItem("vetor")
	localStorage.removeItem("media")
	localStorage.removeItem("tipoDeVariável")
	localStorage.removeItem("amostraPopulação")
	localStorage.removeItem("medidasSeparatrizes")
	
}
function avancar(link){
	media();
	nomeP = document.getElementById("nomeP").value
	localStorage.setItem("nomeVariavelDePesquisa", nomeP)
	window.location.href=link// isso faz com que abra o link na msm pagina

	var qua = document.getElementsByName("qua");// verifica o tipo de variavel
	for (var i = 0; i < qua.length; i++) {
        if (qua[i].checked) {            
        	tipoDeVariável=(qua[i].value);

            tipoDeVariável = localStorage.setItem("tipoDeVariável" , tipoDeVariável)
        }
    }

	var ap = document.getElementsByName("ap"); // verifica se e uma População ou Amostra
	for (var i = 0; i < ap.length; i++) {
        if (ap[i].checked) {            
        	amostraPopulação=(ap[i].value);

            amostraPopulação = localStorage.setItem("amostraPopulação" , amostraPopulação)
        }
    }

	var medidasSeparatrizes = document.getElementsByName("medidasSeparatrizes");//verifica qual e a medida separatriz
	for (var i = 0; i < medidasSeparatrizes.length; i++) {
        if (medidasSeparatrizes[i].checked) {            
        	medidasSeparatrizes=(medidasSeparatrizes[i].value);

            medidasSeparatrizes = localStorage.setItem("medidasSeparatrizes" , medidasSeparatrizes)
        }
    }
	
}

function voltar(link){
		window.location.href=link// isso faz com que abra o link na msm pagina
}