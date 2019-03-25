var vet = [];
var vet2 = [];
var vet3 = [];
var ordens = [];


var nomeP = [];
var fi =[];
var fr =[];
var fac =[];
var facP =[];
var corpo_tabela = document.querySelector("tboby");



//function tabela(nomeP,fi,fr,fac,facP){
//	this.nomeP = nomeP //= function(){
//	//	return(document.getElementById("nomeP").value;)
//  //	}
//	this.fi =  function calculaFi(){
//				var i =0 
//				var j =0
//       			var nVezes = 1
//      		 	var moda  =[];
//       			var comparaV = 0;
//					    for (i = 0; i < vet3.length; i++) { //  percorre o vetor 1 vez
//            				nVezes = 1; //isso zera a conta
//           					for (var j = i + 1; j < vet3.length; j++) { //  percorre o vetor 2 vez
//                				if (vet3[i] == vet3[j]) { // compara se o numero i existe no vetor 
//                    				++nVezes; //isso acumula o tanto de vezes que i aparece no vetor
//                    				for(i=0;i<vet3.length;i++){
//                    					fi[i] = nVezes[i]
//                    				}
//              					}
//            				}
//        				}
//		alert(fi)
//		}
//	this.fr = fr
//	this.fac = fac
//	this.facP = facP
//
//	this.criar_linha_na_tabela = function(){
//		//Criar elementos
//		var linha = document.createElement("tr");
//		var nomeP = document.createElement("td");
//		var fi = document.createElement("td");
//		var fr= document.createElement("td");
//		var fac = document.createElement("td");
//		var facP = document.createElement("td");
//		//aplicar um estilo CSS
//		//------nao vou por------
//		//criar nos
//		fi.appendChild(fi)
//		linha.appendChild(fi)
//		corpo_tabela.appendChild(linha)
//	}
//
//}

function adiciona(){
	var dadosN = document.getElementById("dadosN").value;
 	   vet.push(dadosN);
 	var pmedia  = Number(document.getElementById("dadosN").value);
 		vet3.push(pmedia)
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
	numeros = vet3
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
//	tabela();
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


//function moda(){
//		var i =0 
//		var j =0
//        var nVezes = 1
//        var moda  =[];
//       var comparaV = 0;
//        var vet = vet3 //vetor
//        for (var i = 0; i < vet.length; i++) { //  percorre o vetor 1 vez
//            nVezes = 1; //isso zera a conta
//    for (var j = i + 1; j < vet.length; j++) { //  percorre o vetor 2 vez
//         if (vet[i] == vet[j]) { // compara se o numero i existe no vetor 
//              ++nVezes; //isso acumula o tanto de vezes que i aparece no vetor
//           }
//        }
//         if(nVezes == comparaV){ // isso compara se a mais de uma moda
//          	moda = vet[i] +"," + moda  // isso add as modas 
//            
//            }
//           	if (nVezes > comparaV) { // isso compara se tanto de vezes que i apareceu foi maior que o maior ate agora
//                moda = vet[i]; //isso faz com que o numero de i vire a moda
//                comparaV = nVezes; // isso faz com que a camparação agora seja com o i que acaba de virar a moda 
//            }
//
//
//        }
    //      if(moda.length == vet.length){ // isso compara se a quantidade de modas e igual a quantidades de numero 
    //      	document.getElementById("saida2").innerHTML = ("Não tem moda") //isso diz que não se tem moda
    //      }
    //        else{
//     		 	document.getElementById("saida2").innerHTML = ("Moda: "+ moda); // isso alerta a moda
  	//		}
    //  	alert(i)
    //  	alert(j)
    //		alert("moda.length = " + moda.length)
    //		alert("vet.length = " + vet.length)
     //		alert(moda[0])

//}