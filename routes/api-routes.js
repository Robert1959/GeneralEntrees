const db = require('../models');

module.exports = function(app) {

  app.get('/api/recipies', function(req, res) {
    db.Product.findAll({})
    .then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json({error: error});
    });
  });

  app.get('/api/recipe/:id', function(req, res) {
    db.Product.find({
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
    db.Product.create(req.body)
    .then(function(data) {
      res.json(data);
    }).catch(function(error) {
      res.json(error);
    });
  });
  
};