const db = require('../models');

module.exports = function(app) {

  app.get('/api/recipes', function(req, res) {
    db.Recipe.findAll({
      where: req.query
    })
    .then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json({error: error});
    });
  });

  app.get('/api/recipe/:id', function(req, res) {
    db.Recipe.find({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json({error: error});
    });
  });

  app.post('/api/recipe', function(req, res) {
    db.Recipe.create(req.body)
    .then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json(error);
    });
  });

  // Get all categories and return a JSON object
  app.get('/api/categories', function(req, res) {
    db.Category.findAll({})
    .then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json({error: error});
    });
  });

  app.get('/api/category/:id', function(req, res) {
    db.Recipe.find({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json({error: error});
    });
  });
  
};