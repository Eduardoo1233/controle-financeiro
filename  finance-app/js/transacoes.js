function adicionarTransacao (descricao, valor, tipo, data) {
    const dados = pegarDados()
    const usuario = pegarUsuarioAtual()
    const transacao = {
        id: gerarID(),
        descricao: descricao,
        valor: Number(valor),
        tipo: tipo,
        data: data
    }

    usuario.transacoes.push(transacao)

    const index = dados.usuarios.findIndex(function(u) {
        return u.id === usuario.id
    })

    dados.usuarios[index] = usuario
}