// Categories model field definition
module.exports = function (connection, Sequelize) {
  const Category = connection.define('Category', {

    categoryId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

  });

  return Category;
}

