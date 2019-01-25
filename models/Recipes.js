// Recipe model definition
module.exports = function (connection, Sequelize) {
  const Recipe = connection.define('Recipe', {

    recipeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    // Example.. "Ingrediants for 3 servings".  Defaulting to "1", and validating an integer is used in case we want to do some future calculations for larger recipe servings.
    servings: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '1',
      validate: {
        isInt: true,
      }
    },

    instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    prepTime: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    cookTime: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    // Referenging a path to a picture stored in a local directory.  Alternate method - https://grokonez.com/node-js/nodejs-save-file-image-to-mysql-by-sequelize-with-blob-type
    image: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  });

 // Associations to other models
 Recipe.associate = function(models) {
  Recipe.hasMany(models.Ingredient, {
    foreignKey: 'recipeId'
  });

  Recipe.belongsTo(models.Category, {
    foreignKey: 'categoryId'
   });
};


  return Recipe;
}

