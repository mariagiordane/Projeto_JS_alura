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
        pesoValido = false;
        calcImc.textContent = "Peso Inválido"
    }
    
    if(altura <= 0 || altura >= 3){
        console.log("Altura inválida.");
        alturaValida = false;
        calcImc.textContent = "Altura Inválida"
    }
    
    if(alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        calcImc.textContent = imc.toFixed(2);
    }
    
}


