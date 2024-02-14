const { Sequelize } = require('sequelize');

module.exports = new Sequelize('postgres://adminfrog:2f6Z5MWn9ys4lzgalskWEssMMHRCTg4L@dpg-cn6hrj2cn0vc73ddghag-a.oregon-postgres.render.com/blogs1', {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});