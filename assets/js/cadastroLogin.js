	var comparaEmail = [];
	var comparaSenha = [];

function cadastro(){
			var nome = document.getElementById("nome").value;
			var senha = document.getElementById("senha").value;
			var confirmaSenha = document.getElementById("confirmaSenha").value;
			var email = document.querySelector('#email');
			var emailTeste= document.getElementById("email").value;
			if(nome == ""){
				alert("Por favor Digite um Nome valido ");
			}
			else if (senha == ""){
				alert("Por favor Digite uma senha valida");
			}
			else if (confirmaSenha == ""){
				alert("Por favor confirme sua senha ");
			}
			else if(senha != confirmaSenha){
				alert("As senhas não são iguais");
			}
			else if (emailTeste == ""){
				alert("Por favor digite um e-mail");
			}
  			else if (!email.checkValidity()){
    			alert("Email invalido" );
 		 	}
			else if((nome!= "")&&(senha!="")&&(senha ==confirmaSenha)&&(emailTeste != "")&&(email.checkValidity() == true)){
				alert(nome + " Cadastrado(a) com sucesso");
				localStorage.setItem("email", emailTeste);
				comparaEmail = localStorage.getItem("email");
				localStorage.setItem("senha", senha);
				comparaSenha = localStorage.getItem("senha");
			}
			
	}
	function abreLogin(link){
		window.location.href=link;
	}

		function Logar(){
			emailCadastro = localStorage.getItem("email")
			senhaCadastro = localStorage.getItem("senha")
			emailLogin=document.getElementById("emailLogin").value;
			senhaLogin=document.getElementById("senhaLogin").value;
		if(emailLogin == ""){
			alert("digite o e-mail")
		}		
			else if(senhaLogin == ""){
				alert("digite a senha")
			}
			else if(emailLogin==emailCadastro){
				if(senhaLogin==senhaCadastro){
					location="file:///C:/Users/Daniel/Desktop/Trabalho_ads/depois%20do%20login/Trabalho.html"
				}
				else{alert("Nome de usuario ou senha errados")}
			}
				else{alert("Nome de usuario ou senha errados")}
			}

		function abreCadastro(linkCadastro){
			window.location.href=linkCadastro         //  ------   isso faz com que abra o link na msm pagina ----
			//window.open(link);// isso faz com que abra o link em uma nova guia
		}

		function Convidado(){
			location="file:///C:/Users/Daniel/Desktop/Trabalho_ads/depois%20do%20login/Trabalho.html"
		}