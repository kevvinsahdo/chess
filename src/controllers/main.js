const index = (req, res) => {
    res.render('main/index', {
        message: 'Olá, você está aprendendo Express + HBS!'
    })
}; 

const about = (req, res) => {
    const content = 'Conteudo da página';
    res.render('main/about', {
        content: content
    })
}; 

module.exports = { index, about };