const express = require('express');
const { readdirSync, read } = require('fs');
const port = 3000;
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '1000bm' }));

// auto read Router 
readdirSync('./Routes').map((readDIR) => {
      app.use('/api', require('./Routes/'+readDIR))
})

app.listen(port, () => {
      console.log(`Server is runing on port : ${port}`)
})