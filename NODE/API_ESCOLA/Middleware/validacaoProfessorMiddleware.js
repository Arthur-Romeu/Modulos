function validacaoProfessorMiddleware(req, res, next) {
    console.log('Middleware de validação de aluno executado')
    if (!req.body.nome || !req.body.area_atuacao) {

        res.status(400).json({
            statusCode: 400,
            erro: 'Nome e área de atuação são obrigatórios'
        })
        return
    }
    next()
}

module.exports = validacaoProfessorMiddleware