// Categories model field definition
module.exports = function (connection, Sequelize) {
  const Category = connection.define('Category', {

    CategoryId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    PhotoUrl: {
      type: Sequelize.STRING,
      allowNull: true,
    }

  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

  });

  return Category;
}

