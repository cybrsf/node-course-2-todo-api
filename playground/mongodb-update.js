const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=> {
    if(err){
      return console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDb server");

    // db.collection("Todos").findOneAndUpdate({
    //   _id:new ObjectID("59d3bb6560642220d9b11aae")
    // },{
    //   $set: {
    //       completed: true
    //   }
    //
    // },{
    //   returnOriginal: false
    // }).then((result)=>{
    //   console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
      _id:new ObjectID("59d22fda9ab0e31604dc06e2")
    },{
      $set: {
          name: "T101"
      },
      $inc: {
          age: 1
      }
    },{
      returnOriginal: false
    }).then((result)=>{
      console.log(result);
    });

  //  db.close();
});
