//jshint eversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 5,
    review: "Pretty solid"
});

fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 7
});

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     score: 10,
//     review: "The best fruit"
// });

// const orange = new Fruit({
//     name: "Orange",
//     score: 4,
//     review: "Too sour"
// });

// const banana = new Fruit({
//     name: "Banana",
//     score: 3,
//     review: "Weird Texture"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Successfully inserted all the fruits to fruits db");
//     }
// });


Fruit.find(function(err, fruits){
    if (err){
        console.log(err);

    } else {
        
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
})





// const insertDocument= function(db, callback) {
//     const collection= db.collection('fruits');
// collection.insertMany([
//     {name: "Apple",
//     score: 8,
//     review: "Great Fruit"
//     },    
//     {name: "Orange",
//     score: 6,
//     review: "Kinda sour"
//     },    
//     {name: "Banana",
//     score: 9,
//     review: "Great stuff"}
// ], function(err, result){
//     assert.equal(err, null);
//     assert.equal(3,result.insertedCount);
//     assert.equal(3,Object.keys(result.insertedIds).length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
// });
// }


// const findDocuments = function(db, callback){
//     const collection = db.collection('fruits');
//     collection.find({}).toArray(function(err, fruits){
//         assert.equal(err, null);
//         console.log("Found the following records");
//         console.log(fruits);
//         callback(fruits);
//     })
// }




// // Replace the uri string with your MongoDB deployment's connection string.
// const url = "mongodb://localhost:27017";

//   const dbName = 'fruitsDB';


// const client = new MongoClient(url, {useNewUrlParser: true});

// client.connect(function(err){
//     assert.equal(null, err);
//     console.log("Connected successfully to server 27017");
//     const db = client.db(dbName);

//     findDocuments(db, function(){
//         client.close();
//     })
// });