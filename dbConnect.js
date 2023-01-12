require('dotenv').config()


//mongoDB connection...
const MongoClient = require('mongodb').MongoClient;
//add database connections..
const uri ='mongodb+srv://s222434398:allusatish9023@cluster0.3cg9fxb.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlparser: true})

client.connect((err,db) => {
    
      if(!err) {
       console.log('MongoDB Connected')
    }
      else {

         console.log("DB Error: ", err);
         process.exit(1);
      }

     }) 
    
    
module.MongoClient = client;