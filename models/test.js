const Model = require('../support/model.js');


class Test extends Model {

  static fields = [
    { name: 'title', required: true },
    { name: 'description', required: false, default: 'test' },
    { name: 'price', required: true },
  ];

  constructor(data) {
    super(data);
  }
}

module.exports = Test;