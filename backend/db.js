const nedb = require('nedb');
const sampleProjects = new nedb({filename: 'database/sample-projects.db', autoload: true});

module.exports = sampleProjects;