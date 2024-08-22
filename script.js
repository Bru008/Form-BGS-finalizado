function enviarForm() {
    
    var contaCliente = new Object();

    contaCliente.Nome = document.getElementById('nome').value;
    contaCliente.Idade = document.getElementById('idade').value;
    contaCliente.Email = document.getElementById('email').value;
    contaCliente.Telefone = document.getElementById('telefone').value;
    contaCliente.Empresa = document.getElementById('agencia').value;
    contaCliente.Objetivo = document.getElementById('objetivo').value;

    var json = JSON.stringify(contaCliente)

    console.log(json)
    console.log(contaCliente.valueOf())
}