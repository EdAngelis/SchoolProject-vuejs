const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./modules/userModule/user-controller');
const heroe = require('./controllers/heroes-controllers');

const app = new express();
mongoose.connect('mongodb://DeAngelis84:ml2037@ds133557.mlab.com:33557/vuejs-estudo', { useNewUrlParser: true });

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/users', users);
app.use('/heroes', heroe);
app.use('/', (req, res, next)=>{
    res.status(200).send({index:'Iniciado'});
});



app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});