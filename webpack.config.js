/**
 * Created by davidraleigh on 12/10/15.
 */
var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in: 'src/app.js',
    out: 'public',
    clearBeforeBuild: true
});