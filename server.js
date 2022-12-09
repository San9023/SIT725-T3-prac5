var express = require("express")
var app = express()
var cors = require("cors")
let projectCollection;


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

//mongoDB connection...
const MongoClient = require('mongodb').MongoClient;
//add database connections..
const uri ='mongodb+srv://s222434398:allusatish9023@cluster0.3cg9fxb.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlparser: true})

// insert project...​

const insertProjects = (project,callback) => {
   projectCollection.insert(project,callback);

}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

const createCollection = (collectionName) => {
   client.connect((err,db) => {
       projectCollection = client.db().collection(collectionName);
         if(!err) {
          console.log('MongoDB Connected')
       }
         else {

            console.log("DB Error: ", err);
            process.exit(1);

        }

    })

}

const cardList = [
{
     title:"Kitten 2",
     image:"images/finger.png",
     link: "About Kitten 2",
      desciption: "Demo desciption about kitten 2"

 },
{
        title: "Kitten 3",
        image: "images/kitten-3.jpg",
        link: "About Kitten 3",
        desciption: "Demo desciption about kitten 3"

}

]
//post api
app.get('/api/projects',(req,res) => {
  getProjects((err,result) => {
    console.log(res.json.statusCode);
       if(err) {
          res.json({statusCode: 400, message: err})
      }
        else {
        res.json({statusCode: 200, message:"Success", data: result})

        }

    })

})


    


var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App listening to http://localhost:"+port)
    createCollection("pets")
})




