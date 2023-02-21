const Apple = require('../models/apple');

class AppleController {
    static getAll(req, res) {
        const items = Apple.findAll();
        res.json(items);
    }

    static find(req, res) {
        const id = parseInt(req.params.id);
        const item = Apple.findById(id);
        res.json(item);
    }

    static create(req, res) {
        const newItem = req.body;
        const result = Apple.create(newItem);
        res.json(result);
    }

    static update(req, res) {
        const id = parseInt(req.params.id);
        const updatedItem = req.body;
        const result = Apple.update(id, updatedItem);
        res.json(result);
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        const result = Apple.delete(id);
        res.json(result);
    }
}

module.exports = AppleController;
