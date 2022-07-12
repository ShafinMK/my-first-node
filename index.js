const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World! Demon King')
})

const users = [{
  id: 0,
  name: 'Forger Lowser',
  phone: 443322,
  email: 'adb@gmail.com'
},
{
  id: 1,
  name: 'Rofwa Eamar',
  phone: 443322,
  email: 'rofwa@gmail.com'
},
{
  id: 2,
  name: 'Karmiw Insaer',
  phone: 443322,
  email: 'inser@gmail.com'
},
{
  id: 3,
  name: 'Loid Fodger',
  phone: 443322,
  email: 'loid23@gmail.com'
},
{
  id: 4,
  name: 'Shazam Sentinro',
  phone: 443322,
  email: 'spa@gmail.com'
},
]

app.get('/users', (req, res) => {
  res.send(users)
})



// Search Query Parameter 
app.get('/users', (req, res) => {
  const search = req.query.search;
  console.log(req.query);
  // if (search) {
  //   const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
  //   res.send(searchResult);

  // }
  // else {
  //   res.send(users);
  // }
})

//dynamic API
app.get('/users/:ID', (req, res) => {
  const id = req.params.ID;
  const user = users[id];
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// post method 

app.post('/users', (req, res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('post hitted',newUser);
  // res.send('inside the server');
  res.json(newUser)
})