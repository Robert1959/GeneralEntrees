const path = require('path');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/results', function (req, res) {
        if(req.query['categoryId']) {
            res.sendFile(path.join(__dirname, '../public/results.html'));
        } else {
            res.sendFile(path.join(__dirname, '../public/index.html'))
        };
    });
    app.get('/recipe', function (req, res) {
            res.sendFile(path.join(__dirname, '../public/recipe.html'));        
    });
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};