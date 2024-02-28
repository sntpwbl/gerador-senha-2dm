const btnConfirmar = document.querySelector('#btnconfirmar');
const btnLimpar = document.querySelector('#btnlimpar');

var elementoDiv = document.querySelector('#senhas');

function gerarSenha(){
    var qtdCaracteres = document.getElementById('tamanhosenha').value;
    var qtdSenhas = document.getElementById('quantidadesenha').value;
    var incluirMaiusculas = document.getElementById('letram').checked;
    var incluirNumeros = document.getElementById('numeros').checked;
    var incluirEspeciais = document.getElementById('caracterespecial').checked;

    var padrao = 'abcdefghijklmnopqrstuvwxyz';
    var maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numeros = '0123456789'
    var especiais = '!@#$%&*()+=-*./';
    if(qtdCaracteres>20){
        alert('As senhas devem ter entre 1 a 20 caracteres. Tente novamente.');  
        limparCampos();
    }
    else if(qtdSenhas>10){
        alert('A quantidade de senhas não pode ultrapassar o número 10. Tente novamente.');
        limparCampos();
    }
    else if(qtdCaracteres <= 0 || qtdCaracteres == ''){
        alert('O campo de tamanho das senhas não pode ser nulo.');
        limparCampos();
    }
    else if(qtdSenhas <= 0 || qtdSenhas == ''){
        alert('O campo de quantidade das senhas não pode ser nulo.');
        limparCampos();
    }
    else{
        limparCampos();
    

        if (incluirMaiusculas){
            padrao+=maiuscula;
        }
        if (incluirNumeros){
            padrao+=numeros;
        }
        if(incluirEspeciais){
            padrao+=especiais
        }
    
        var senhas = [];
        for (var i = 0; i < qtdSenhas; i++) {
            var senha = "";
            for (var j = 0; j < qtdCaracteres; j++) {
                var indiceRandom = Math.floor(Math.random() * padrao.length);
                senha+=padrao[indiceRandom];
            }
            senhas.push(senha);
        }
    
        
        elementoDiv.style.visibility = "visible";
        elementoDiv.innerHTML = '';
        senhas.forEach(function(senha) {
            elementoDiv.innerHTML += `<p>${senha}</p>`;
        });
    }
    
}



function limparCampos(){
    document.getElementById("tamanhosenha").value = '';
    document.getElementById("quantidadesenha").value = '';
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

function limparForms(){
    elementoDiv.innerHTML = '';
    elementoDiv.style.visibility = "hidden";
}
