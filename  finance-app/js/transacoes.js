function adicionarTransacao (descricao, valor, tipo, data, etiquetas) {
    const dados = pegarDados()
    const usuario = pegarUsuarioAtual()
    const transacao = {
        id: gerarID(),
        descricao: descricao,
        valor: Number(valor),
        tipo: tipo,
        data: data,
        etiquetas: etiquetas || []
    }

    usuario.transacoes.push(transacao)

    const index = dados.usuarios.findIndex(function(u) {
        return u.id === usuario.id
    })

    dados.usuarios[index] = usuario

    salvarDados(dados)
}

function listarTransacoes() {
    const lista = document.getElementById("lista-transacoes")

    if (!lista) {
        console.log("X elemento lista-transacoes nao encontrado")
    }
    const usuario = pegarUsuarioAtual()

    if (!usuario) return

    if (!usuario.transacoes) {
        usuario.transacoes = []
    }

    lista.innerHTML = ""
    const transacoes = usuario.transacoes

    transacoes.forEach(function(t) {
        const item = document.createElement("div")

        const descricao = document.createElement("h3")
        descricao.textContent = t.descricao

        const valor = document.createElement("span")
        const tipo = document.createElement("span")
        valor.textContent = "R$ " + t.valor + " - " + t.tipo



        const etiquetas = document.createElement("div")

        const tags = t.etiquetas || []
        tags.forEach(function(tag) {
            const tagEl = document.createElement("p")
            tagEl.textContent = tag
            etiquetas.appendChild(tagEl)
        }) 

        item.appendChild(descricao)
        item.appendChild(valor)
        item.appendChild(tipo)
        item.appendChild(etiquetas)

        lista.appendChild(item)
    })
}

function calcularSaldo() {
    const usuario = pegarUsuarioAtual()
    if (!usuario || !usuario.transacoes) return 0

    let saldo = 0 

    usuario.transacoes.forEach(function(t) {
        if (t.tipo === "receita") {
            saldo += Number(t.valor)
        } else {
            saldo -= Number(t.valor)
        }
    })

    return saldo
}

function mostrarSaldo() {
    const el = document.getElementById("saldo")
    if (!el) return

    const saldo = calcularSaldo()
    el.textContent = "Saldo: R$  " + saldo
}

if (document.getElementById("lista-transacoes")) {
    listarTransacoes()
    mostrarSaldo()
}

document.addEventListener("DOMContentLoaded", function() {
    listarTransacoes()
    mostrarSaldo()
})