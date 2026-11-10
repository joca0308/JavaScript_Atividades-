
function classificarAtendimento() {

    // Declarando as variáveis
    let corPulseira = document.getElementById("cor").value;
    let idadePaciente = Number(document.getElementById("idade").value);
    let gestante = document.getElementById("gestante").checked;

    // Verificando a cor da pulseira
    if (corPulseira == "vermelha") {

        document.getElementById("resultado").textContent =
        "Atendimento de Emergência: Sala de trauma imediata.";

    } 
    
    else if (corPulseira == "amarela") {

        if (idadePaciente >= 60 || gestante == true) {

            document.getElementById("resultado").textContent =
            "Atendimento Urgente: Prioridade Especial Preferencial.";

        } else {

            document.getElementById("resultado").textContent =
            "Atendimento Urgente: Fila padrão amarela.";
        }

    } 
    
    else if (corPulseira == "verde") {

        // Operador ternário
        let resultado = idadePaciente < 12 ?
        "Encaminhar para Pediatria" :
        "Encaminhar para Clínica Geral";

        document.getElementById("resultado").textContent = resultado;

    } 
    
    else {

        alert("Código de cor desconhecido!");

    }

}
