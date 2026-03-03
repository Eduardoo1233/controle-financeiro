let transacoes = [];
const descricaoTransacao = document.getElementById("descricaoTransacao");
const valorTransacao = document.getElementById("valorTransacao");
const btnEnviarInformacoes = document.getElementById("enviarDadosDaTransacao");

function renderizar() {
    const ul = document.getElementById("listaDeTransacoes");
    ul.innerHTML = "";
    transacoes.forEach(transacao => {
        const li = document.createElement("li");
        li.textContent = "Descrição da Transação: " + transacao.descricao + "R$" + transacao.valor;
        ul.appendChild(li);
    });
}

function salvarTransacao() {
    const novaTransacao = {
        descricao: descricaoTransacao.value,
        valor: valorTransacao.value
    };
    transacoes.push(novaTransacao);
    renderizar();
}

btnEnviarInformacoes.addEventListener("click", salvarTransacao);