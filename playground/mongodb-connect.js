const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db)=> {
    if(err){
      return console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDb server");

    db.collection("Todos").insertOne({
       text : "Something to do",
       completed: false
    }, (err, result)=>{
      if(err){
        return console.log("Unable to insert todo", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    })

    db.collection("Users").insertOne({
      name: "Robot",
      age: 120,
      location: "Istanbul"
    }, (err,result) => {
      if(err){
        return console.log("Unable start users", err);
      }
      console.log(JSON.stringify(result.ops, undefined,2 ));
    });

    db.close();
});
