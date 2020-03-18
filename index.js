const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//routes
const event = require('./routes/event');
app.use('/event', event);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}
//password ICkkYz6ZxfC2bacW
//password sohilmomin
const uri = process.env.mongodb || 'mongodb://localhost:27017/cc';
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }, (err) => {
        if (err) {
            console.log('unable to connect to database');
            process.exit(1);
        }
        else
            console.log('successfully connected to the database');
    });

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('app is running');
});