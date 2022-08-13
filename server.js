// ----- external modules -----
require('dotenv').config();
const express = require('express');
const path =require('path');

// ----- Middleware -----
const app = express();
app.use(express.json())
app.use(express.static(path.join(__dirname, "/client/dist")));

const {findAuth, createAuth, replaceAuth, removeAuth,
  findUser, createUser, replaceUser, removeUser,
  findBand, createBand, replaceBand, removeBand,
  findChat, createChat, replaceChat, removeChat} = require('./db.js');

// Authentication -----

app.get('/auth', (req, res) => {
findAuth()
.then((entries) => {
  // console.log('entries:', entries, Array.isArray(entries), 'length:', entries.length);
  res.send(entries);
})
.catch((error) => {console.log('error:', error)});
});

app.post('/auth', (req, res) => {
createAuth(req.body)
.then((response) => {
console.log('data added to db:', response)
res.status(200).send('Data Added!')
})
.catch((error) => {console.log('error:', error)});
});

app.delete('/auth', (req, res) => {
console.log('I am the server I have recieved this data:', req.body)
removeAuth(req.body)
.then((result) => {
  console.log('entry deleted:', result);
})
.catch((error) => {
  console.log('error:', error);
});
res.send('Entry deleted');
});

app.put('/auth', (req, res) => {
// console.log('I an the server I have recieved the PUT request:', req.body);
replaceAuth(req.body)
.then((result) => {console.log('result:')})
.catch((error) => {console.log('error:', error)})
});

// Users -----

app.get('/user', (req, res) => {
findUser()
.then((entries) => {
  // console.log('entries:', entries, Array.isArray(entries), 'length:', entries.length);
  res.send(entries);
})
.catch((error) => {console.log('error:', error)});
});

app.post('/user', (req, res) => {
createUser(req.body)
.then((response) => {
console.log('data added to db:', response)
res.status(200).send('Data Added!')
})
.catch((error) => {console.log('error:', error)});
});

app.delete('/user', (req, res) => {
console.log('I am the server I have recieved this data:', req.body)
removeUser(req.body)
.then((result) => {
  console.log('entry deleted:', result);
})
.catch((error) => {
  console.log('error:', error);
});
res.send('Entry deleted');
});

app.put('/user', (req, res) => {
// console.log('I an the server I have recieved the PUT request:', req.body);
replaceUser(req.body)
.then((result) => {console.log('result:')})
.catch((error) => {console.log('error:', error)})
});

// Bands -----

app.get('/band', (req, res) => {
findBand()
.then((entries) => {
  // console.log('entries:', entries, Array.isArray(entries), 'length:', entries.length);
  res.send(entries);
})
.catch((error) => {console.log('error:', error)});
});

app.post('/band', (req, res) => {
createBand(req.body)
.then((response) => {
console.log('data added to db:', response)
res.status(200).send('Data Added!')
})
.catch((error) => {console.log('error:', error)});
});

app.delete('/band', (req, res) => {
console.log('I am the server I have recieved this data:', req.body)
removeBand(req.body)
.then((result) => {
  console.log('entry deleted:', result);
})
.catch((error) => {
  console.log('error:', error);
});
res.send('Entry deleted');
});

app.put('/band', (req, res) => {
// console.log('I an the server I have recieved the PUT request:', req.body);
replaceBand(req.body)
.then((result) => {console.log('result:')})
.catch((error) => {console.log('error:', error)})
});


// Chats -----

app.get('/chat', (req, res) => {
findChat()
.then((entries) => {
  // console.log('entries:', entries, Array.isArray(entries), 'length:', entries.length);
  res.send(entries);
})
.catch((error) => {console.log('error:', error)});
});

app.post('/chat', (req, res) => {
createChat(req.body)
.then((response) => {
console.log('data added to db:', response)
res.status(200).send('Data Added!')
})
.catch((error) => {console.log('error:', error)});
});

app.delete('/chat', (req, res) => {
console.log('I am the server I have recieved this data:', req.body)
removeChat(req.body)
.then((result) => {
  console.log('entry deleted:', result);
})
.catch((error) => {
  console.log('error:', error);
});
res.send('Entry deleted');
});

app.put('/chat', (req, res) => {
// console.log('I an the server I have recieved the PUT request:', req.body);
replaceChat(req.body)
.then((result) => {console.log('result:')})
.catch((error) => {console.log('error:', error)})
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log('can\'t connect to port...:', err);
  } else {
    console.log(`connected to localhost:${process.env.PORT}...`);
  }
})