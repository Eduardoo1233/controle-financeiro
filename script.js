let transacoes = [];
const descricaoTransacao = document.getElementById("descricaoTransacao");
const valorTransacao = document.getElementById("valorTransacao");
const btnEnviarInformacoes = document.getElementById("enviarDadosDaTransacao");

function salvarTransacao() {
    transacoes = [{
        descricao: "descricaoTransacao", valor: "valorTransacao"
    }];
    conosole.log(transacoes);
};

btnEnviarInformacoes.addEventListener("click", salvarTransacao);