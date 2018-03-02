var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj1 = { ID: 1, Name: "Blueberry", Price: "20$", CreatedAt: 3/1/2018 , UpdatedAt: 3/1/2018, SellerName: "Nawar"};
  var myobj2 = { ID: 2, Name: "Raspberry", Price: "15$", CreatedAt: 3/1/2018, UpdatedAt: 3/1/2018, SellerName: "Nawar"};
  var myobj3=  { ID: 3, Name: "Strawberry", Price: "10$", CreatedAt: 3/1/2018, UpdatedAt: 3/1/2018, SellerName: "Nawar"};
  var myobj4 = { ID: 4, Name: "cherry", Price: "12$", CreatedAt: 3/1/2018, UpdatedAt: 3/1/2018, SellerName: "Nawar"};

  dbo.collection("Products").insertOne(myobj1, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  dbo.collection("Products").insertOne(myobj2, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  dbo.collection("Products").insertOne(myobj3, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  dbo.collection("Products").insertOne(myobj4	, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});