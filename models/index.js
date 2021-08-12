const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',  {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  slug: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: true
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'closed'
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
});

Page.beforeValidate( (pageInstance) => {
  console.log(pageInstance)
  console.log('before', pageInstance.dataValues.slug)
  pageInstance.dataValues.slug = pageInstance.dataValues.title.replace(/\s+/g, '_').replace(/\W/g, '');
  console.log('after', pageInstance.slug)
})


module.exports = {
  db,
  Page,
  User
}
