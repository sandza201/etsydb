const Listing = require('../models/listing');

class ListingController {
    static getAll(req, res) {
        const listings = Listing.findAll();
        res.json(listings);
    }

    static find(req, res) {
        const id = parseInt(req.params.id);
        const listing = Listing.findById(id);
        res.json(listing);
    }

    static create(req, res) {
        const newListing = req.body;
        const result = Listing.create(newListing);
        res.json(result);
    }

    static update(req, res) {
        const id = parseInt(req.params.id);
        const updatedListing = req.body;
        const result = Listing.update(id, updatedListing);
        res.json(result);
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        const result = Listing.delete(id);
        res.json(result);
    }
}

module.exports = ListingController;
