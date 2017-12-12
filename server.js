
  let express = require("express");
  let app = express();
  let twilio = require("twilio");
  const bodyParser = require('body-parser')
  const MongoClient = require('mongodb').MongoClient //Requireing specific portion of the whole module

  let db

  //Set up bodyparser to access the DOM

  app.set('view engine','ejs')
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use(express.static('public'))

//If there's access to the database, listen to the server port
MongoClient.connect('mongodb://<user>:<password>@ds141175.mlab.com:41175/<app_name>',(err,database)=>{
  if (err) return console.log(err)

  db = database

  //listen to server
  app.listen(process.env.port || 3000,()=>{
    console.log("Runing on port 3000")
  })
})

//API

  //Get request. Send index.ejs file and send data from database to pupulate
  app.get('/',(req,res)=>{
    //Display the database
      db.collection('contacts').find().toArray((err,result)=>{
        if (err) return console.log(err)
        res.render('index.ejs',{messages:result})
      })


  })

  //Api call to send messages with Twilio
  app.post('/sendMessage',(req,res)=>{
    //extract message from DOM
    let message = req.body.mess
    console.log("The message is: "+message)
    //Twilio credentials
    let accountSid = "<Your account id>";
    let authToken = "<Your account token>";
    let client = new twilio(accountSid,authToken);


    //TODO:implement loop through database to extract data
    db.collection('contacts').find().toArray((err, result) => {
      if (err) return console.log(err)

      //extract info from database
      result.forEach((el,i)=>{
        let phone = "+1"+el.phone
        let name = el.firstName
        console.log(phone+" "+name)

        //Create message to be sent

        //Send message with Twilio API
            client.messages.create({
              body: message,
              to: phone,
              from:"+18573424323",
            }).then((message) => console.log(message.sid));

      })
    })

  })

  app.post('/enterData',(req,res)=>{

    //create contact in contacts collection in Mongo
    db.collection('contacts').save({firstName:req.body.firstName,lastName:req.body.lastName,phone:req.body.phone},(err,result)=>{
      if (err) return console.log(err)
      console.log("saved to database")
      res.redirect('/')
    })
  })
