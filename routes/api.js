const express = require('express');
const TestController = require('../controllers/testController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Add authenticateToken middleware to this router
// router.use(authenticateToken);

router.get('/tests', TestController.getAll);
router.get('/tests/find/:id', TestController.find);
router.post('/tests', TestController.create);
router.put('/tests/:id', TestController.update);
router.delete('/tests/:id', TestController.delete);

module.exports = (app) => {
    app.use('/api', router);
};