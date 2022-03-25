
const express = require('express')
const app = express()
// const cors = require('cors');
const connectDB = require("./connect/db");
const animalroutes = require("./routes/animalroutes");
var path = require('path');
const Cards = require('./models/animals')
const session = require('express-session');

const bodyParser = require('body-parser');
// connecting to db this reference to connect folder db.js file
connectDB();

// app.use(bodyparser.urlencoded({

// extended: true

// }));
// app.use(bodyparser.json());

// setting the session
app.use(session({

    secret: "my secrey key",
    saveUninitialized: true,
    resave: false,
    
    }))
    
    app.use((req,res, next)=>{
    
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
    });
// routing

// set engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// this so it wont say cross origin
// app.use(cors());
app.use(bodyParser.urlencoded({

    extended: true
    
    }));
    app.use(bodyParser.json());
// middleware for responding and requesting json file
app.use(express.json());
//  to the speficic path
app.use("", require("./routes/Crud"));
app.use("/api/animal",  animalroutes);



// app.get('/', (req, res) =>{
    
    
//     res.render("index", {title: "home page"});
    
    
// });
// app.get('/create', (req, res) =>{

    
//     res.render("add_animals", {title:"add animals"});
    
    
// })
// app.post('/create',(req, res) =>{
   

//     const card = Cards({


// // image: String(req.file.filename),




//     });
  
//     card.save((err)=>{

// if (err){

// res.json({message: err.message, type: "danger"});

// }else{

// res.redirect("/");


// }


//     })
    
    

// });
// app.use('/', crud);
// connecting nodejs to a port number make sure choose the one that isnt running

//app.get("/", function(req, res){ ... home page...})

//app.put("/newAninaml", function(r,r){})

//app.delete...

// app.use(session({

//     secret: "my secrey key",
//     saveUninitialized: true,
//     resave: false,
    
//     }))
    
//     app.use((req,res, next)=>{
    
//     res.locals.message = req.session.message;
//     delete req.session.message;
//     next();
    
//     })

const PORT = 5001;

//Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));

