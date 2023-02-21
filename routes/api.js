const express = require('express');
const ListingController = require('../controllers/listingController');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

// Add authenticateToken middleware to this router
// router.use(authenticateToken);

router.get('/listings', ListingController.getAll);
router.get('/listings/find/:id', ListingController.find);
router.post('/listings/', ListingController.create);
router.put('/listings/:id', ListingController.update);
router.delete('/listings/:id', ListingController.delete);

module.exports = (app) => {
    app.use('/api', router);
};