// Product model field definition
module.exports = function (connection, Sequelize) {
  const Ingredient = connection.define('Ingredient', {

    IngredientId: {
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

    // This will be used for something like 1.25 in the anout "one and a quarter" cups
    Units: {
      type: Sequelize.DECIMAL(6, 2),
      allowNull: false,
      defaultValue: '0.00'
    },

    // This will be used for measurment units such as cups, ounces, teaspoons, etc
    MeasurementUnit: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },

    // Creating foreign key that points to RecipeId in the Recipe model
    RecipeId: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to Recipe model
        model: Recipe,
        // This is the column name of the referenced model
        key: 'RecipeId'
      }
    }

  });

  return Ingredient;
}

