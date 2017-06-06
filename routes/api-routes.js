var burgers = require("../models").Burger;

// Routes =============================================================
module.exports =  {

    read: function(cb) {
       burgers.findAll({}).then(function(burgers){
     		cb(burgers);
    	});
    },
    insert: function(name, cb) {
	    burgers.create({
	        name: name,
	      	devoured: false
    	}).then(function(burgers) {
       		cb(burgers);
    	});

    },
    
    update: function(id,cb) {
        burgers.update(
        	{devoured: true},
      		{where:{
	        	id: id
	      	}
    	}).then(function(burgers){
     		cb(burgers);
    	});
    },

    delete: function(id, cb) {
       burgers.destroy({
      		where:{
        		id: id
      		}
    	}).then(function(burgers){
    		cb(burgers);
    	});
    }


}; //end of object