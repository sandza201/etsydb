const fs = require('fs');
const path = require('path');

// Get the name of the controller from the command line arguments
const controllerName = process.argv[2];
const uppercaseName = capitalizeFirstLetter(controllerName);
const plural = pluralize(controllerName, 2);

function pluralize(str, num) {
    return num === 1 ? str : str + 's';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Create the file content with the desired content
const controllerContent = `const ${uppercaseName} = require('../models/${controllerName.toLowerCase()}');

class ${uppercaseName}Controller {
    static getAll(req, res) {
        const items = ${uppercaseName}.findAll();
        res.json(items);
    }

    static find(req, res) {
        const id = parseInt(req.params.id);
        const item = ${uppercaseName}.findById(id);
        res.json(item);
    }

    static create(req, res) {
        const newItem = req.body;
        const result = ${uppercaseName}.create(newItem);
        res.json(result);
    }

    static update(req, res) {
        const id = parseInt(req.params.id);
        const updatedItem = req.body;
        const result = ${uppercaseName}.update(id, updatedItem);
        res.json(result);
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        const result = ${uppercaseName}.delete(id);
        res.json(result);
    }
}

module.exports = ${uppercaseName}Controller;
`;

const dbContent = `[]`

const modelContent = `const Model = require('../support/model.js');


class ${uppercaseName} extends Model {

  /* 
   * Add table data
   * Example
  static fields = [
    { name: 'title', required: true },
    { name: 'description', required: false, default: '2' },
    { name: 'price', required: true },
  ]; */

  constructor(data) {
    super(data);
  }
}

module.exports = ${uppercaseName};`

// Create the file in the controllers directory
const controller = `${controllerName}Controller.js`;
const controllerPath = path.join(__dirname, '..', 'controllers', controller);

// Create database table .json file
const db = `${plural}.json`;
const dbPath = path.join(__dirname, '..', 'database', db);

// Create database table model
const model = `${controllerName}.js`;
const modelPath = path.join(__dirname, '..', 'models', model);

fs.writeFileSync(controllerPath, controllerContent);
fs.writeFileSync(dbPath, dbContent);
fs.writeFileSync(modelPath, modelContent);

console.log(`Created controller at ${controllerPath}`, '\n', `Created table at ${dbPath}`, '\n', `Created database model at ${modelPath}`);
