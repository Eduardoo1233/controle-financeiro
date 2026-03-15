function criarUsuario(nome, senha) {
    const dados = pegarDados()

    const usuario = {
        id: gerarID(),
        nome: nome,
        senha: senha,
        transacoes: []
    }

    dados.usuarios.push(usuario)
    salvarDados(dados)
}

function login(nome, senha) {
    const dados = pegarDados()

    const usuario = dados.usuarios.find(function(u) {
        return u.nome === nome && u.senha === senha
    })

    if (usuario) {
        localStorage.setItem("usuarioLogado", usuario.id)
        console.log("login Realizad0")
    } else {
        console.log("Usuario ou senha incorretos")
    }
}

function pegarUsuarioAtual() {
    const id = localStorage.getItem("usuarioLogado")

    const dados = pegarDados()

    const usuario = dados.usuarios.find(function(u) {
        return u.id === id
    })

    return usuario
}