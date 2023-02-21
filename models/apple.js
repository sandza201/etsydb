const Model = require('../support/model.js');


class Apple extends Model {

  static fields = [
    { name: 'title', required: true },
    { name: 'description', required: false, default: '2' },
    { name: 'price', required: true },
  ];

  constructor(data) {
    super(data);
  }
}

module.exports = Apple;