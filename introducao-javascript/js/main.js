var titulo = document.querySelector(".titulo");
titulo.textContent = "Virginia Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for( var i = 0; i < pacientes.length ; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var calcImc = paciente.querySelector(".info-imc")
    
    var pesoValido = true;
    var alturaValida = true;
    
    if(peso <= 0 || peso >= 250){
        console.log("Peso inválido.");
        calcImc.textContent = "Peso Inválido"
        pesoValido = false;

        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida.");
        calcImc.textContent = "Altura Inválida"
        alturaValida = false;

        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        calcImc.textContent = imc.toFixed(2);
    }
    
}
//escutador de evento
titulo.addEventListener("click", function(){
    console.log("Olá eu fui clicado!");
});
/* OU PODEMOS USAR A FUNÇÃO NOMEADA ABAIXO, sempre sem parênteses.
Pois se usarmos a função abaixo com parênteses para o evento click, será  
associado o retorno da função, que será 0.*/
function mostraMensagem(){
    console.log("Olá eu fui clicado!");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

//transformar o valor de cada input em uma variável
    var form = document.querySelector("#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

//transformar as variáveis em itens da tabela
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

//acrescentar a tabela ao html
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);


});

