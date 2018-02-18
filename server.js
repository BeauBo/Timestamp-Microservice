const express = require('express');
const app = express();
const routes = require('./routes/api');

app.use(express.static('public'));

//initialize routes
app.use(routes);



//listen to the port
app.listen(process.env.PORT || 4000, function(){
  console.log('Now listening for requests')
})
