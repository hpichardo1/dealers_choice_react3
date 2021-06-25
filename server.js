const express = require('express')
const path = require('path')
const app = express();
const {syncAndSeed, db, models: {Dealer, Car, Client} } = require('./db.js')
const PORT = 3000


const DIST_PATH = path.join(__dirname, './dist');

app.use(express.static(DIST_PATH));
app.use(express.json());


app.get('/cars', async(req, res, next)=>{
  try {
    const response = await Car.findAll()
    res.send(response)
  }
  catch(e){
    console.log(e)
  }
})

app.get('/dealers', async(req, res, next)=>{
  try {
    const response = await Dealer.findAll()
    res.send(response)
  }
  catch(e){
    console.log(e)
  }
})

app.get('/clients', async(req, res, next)=>{
  try {
    const response = await Client.findAll()
    res.send(response)
  }
  catch(e){
    console.log(e)
  }
})


const init = async()=>{
  try {
    await db.sync({force: true})
    await syncAndSeed();
    await app.listen(PORT, ()=>{
      console.log(`listening on port ${PORT}`)
    })
  }
  catch(e){
    console.log(e)
  }
}

init();




