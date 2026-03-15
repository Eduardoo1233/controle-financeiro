const CHAVE = "financeApp"

function pegarDados() {
    const dados = localStorage.getItem(CHAVE)

    if (dados) {
        return JSON.parse(dados)
    }

    return {
        usuarios: []
    }
}

function salvarDados(dados) {
    localStorage.setItem(CHAVE, JSON.stringify(dados))
}