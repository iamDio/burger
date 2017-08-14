const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
		})

	},

  update: function(id,cb){
  	orm.update("burgers", id,cb);
  },

  create: function(id,cb){
  	orm.create("burgers", id,cb);
  }
}

module.exports = burger;