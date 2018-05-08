let path = require("path");

let orm = require(path.join(__dirname, "..", "config", "orm.js"));

var burger = {
    "getBurgers": function(callback) {
        orm.selectAll("burgers", callback);
    },

    "addBurger": function(name, devoured, callback) {
        var object = {
            burger_name: name,
            devoured: devoured
        }

        orm.insertOne("burgers", object, callback);
    },

    "updateBurger": function(id, name, devoured, callback) {
        var id_object = {
            "name" : "id",
            "value": id
        };

        var object = {
            burger_name: name,
            devoured: devoured
        }
        
        orm.updateOne("burgers", id_object, object, callback);
    },

    "deleteBurger": function(id, callback) {
        const id_object = {
            "name" : "id",
            "value": id
        };
        
        orm.deleteOne("burgers", id_object, callback);
    }
};

module.exports = burger;