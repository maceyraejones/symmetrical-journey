
const express = require('express')
const app = express()
const cors = require('cors');
const connectDB = require("./connect/db");
const animalroutes = require("./routes/animalroutes");
connectDB();
app.get('/', (req, res) => {
  res.send('Home Page')
})
app.use(cors());
app.use(express.json());

app.use("/api/animal",  animalroutes);
// app.listen(5000, () => {
//   console.log('listening to port 5000')
// })s


const PORT = 5001;
//Middleware
//DB Config

//API Endpoints

//Listener
app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));

