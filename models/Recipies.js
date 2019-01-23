// Product model field definition
module.exports = function (connection, Sequelize) {
  const Recipe = connection.define('Recipe', {

    recipeId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    Title: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    // Example.. "Ingrediants for 3 servings".  Defaulting to "1", and validating an integer is used in case we want to do some future calculations for larger recipe servings.
    Servings: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: '1',
      validate: {
        isInt: true,
      }
    },

    Instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    PrepTime: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    CookTime: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    // Referenging a path to a picture stored in a local directory.  Alternate method - https://grokonez.com/node-js/nodejs-save-file-image-to-mysql-by-sequelize-with-blob-type
    Image: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    // Creating foreign key that points to CategoryId in the Category model
    CategoryId: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to Category model
        model: Category,
        // This is the column name of the referenced model
        key: 'CategoryId'
      }
    }

  });

  return Recipe;
}

