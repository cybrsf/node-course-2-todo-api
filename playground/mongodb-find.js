const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=> {
    if(err){
      return console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDb server");

    // db.collection("Todos").find({_id: new ObjectID("59d235ad12bfdafc375fca3e")}).toArray().then((docs)=>{
    //   console.log("Todos");
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to tech todos", err);
    // })

    db.collection("Todos").find().count().then((count)=>{
          console.log(`Todos count: ${count}`);
    }, (err)=> {
      console.log("Unable fetch todos", err);
    });
    db.close();
});
