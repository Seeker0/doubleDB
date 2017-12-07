'use strict';

const path = require('path');

//Set Options
let config = {
  config: './config/sequelize.json',
  'migrations-path': './migrations/sequelize',
  'seeders-path': './seeds/sequlelize',
  'models-path': './models/sequelize'
};

//Resolve the paths to absolute paths
Object.keys(config).forEach(key => {
  config[key] = path.resolve(config[key]);
});

//Exported like any other module
module.exports = config;
