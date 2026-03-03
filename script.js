alert("JS carregou");
let transacoes = [];
const descricaoTransacao = document.getElementById("descricaoTransacao");
const valorTransacao = document.getElementById("valorTransacao");
const btnEnviarInformacoes = document.getElementById("enviarDadosDaTransacao");

function salvarTransacao() {
    const novaTransacao = {
        descricao: descricaoTransacao.value,
        valor: valorTransacao.value
    };
    transacoes.push(novaTransacao);
    document.getElementById("debug").textContent = "Total de Transações: " + transacoes.length;
}

btnEnviarInformacoes.addEventListener("click", salvarTransacao);