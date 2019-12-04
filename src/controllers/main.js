const { Match } = require('../models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;

const index = async (req, res) => {
    let user = req.session.user;
    let myMatches = await Match.findAll({
        where: {
            [op.or]: [
                { id_user_1: user.id },
                { id_user_2: user.id },
            ],
            winner: null,
        }
    });

    let waitingMatches = await Match.findAll({
        where: {
            [op.or]: [
                {
                    id_user_1: null,
                    id_user_2: {
                        [op.ne]: user.id 
                    }
                },
                {
                    id_user_2: null,
                    id_user_1: {
                        [op.ne]: user.id
                    }
                },
            ],
            winner: null
        }
    });

    res.render('main/index', { myMatches, waitingMatches });
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