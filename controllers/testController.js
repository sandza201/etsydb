const Test = require('../models/test');

class TestController {
    static getAll(req, res) {
        const items = Test.findAll();
        res.json(items);
    }

    static find(req, res) {
        const id = parseInt(req.params.id);
        const item = Test.findById(id);
        res.json(item);
    }

    static create(req, res) {
        const newItem = req.body;
        const result = Test.create(newItem);
        res.json(result);
    }

    static update(req, res) {
        const id = parseInt(req.params.id);
        const updatedItem = req.body;
        const result = Test.update(id, updatedItem);
        res.json(result);
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        const result = Test.delete(id);
        res.json(result);
    }
}

module.exports = TestController;
