const express = require('express')
const path = require('path')
const app = express();
const {syncAndSeed, db, models: {Dealer, Car, Client} } = require('./db.js')
const PORT = 3000


const DIST_PATH = path.join(__dirname, './dist');
const PUBLIC_PATH = path.join(__dirname, './public');

app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));
app.use(express.json());


app.get('/cars', async(req, res, next)=>{
  try {
    const response = await Car.findAll({
      include: [Client, Dealer]
    })
    res.send(response)
  }
  catch(e){
    console.log(e)
  }
})

app.get('/dealer', async(req, res, next)=>{
  try {
    const response = await Dealer.findAll({
      include: [Car, Client]
    })
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

app.delete('/:id', async (req, res) => {
 
  try {
    const { id } = req.params
    await Car.destroy({ where: {id: id}})
    res.sendStatus(200)
  }
  catch (err){
    res.status(400).send(err)
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




