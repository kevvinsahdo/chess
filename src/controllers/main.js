const { Match } = require('../models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

const index = async (req, res) => {
    let user = req.session.user;
    let myMatches = await Match.findAll({
        where: {
            [op.or] : [
                { id_user_1: user.id },
                { id_user_2: user.id },
            ]
        }
    });

    res.render('main/index', { myMatches });
};

const about = async (req, res) => {
    const content = 'Conteudo da página';
    res.render('main/about', {
        content: content
    })
};

const ui = async (req, res) => {
    res.render('main/ui', {})
}

module.exports = { index, about, ui };