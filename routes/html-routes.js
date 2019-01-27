const path = require('path');
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    app.get('/results', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/results.html'));
    });
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};