const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});

connectDB();

const bootcamps = require('./routes/bootcamps');

const app = express();

app.use(express.json());

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

app.use('/api/bootcamps', bootcamps);
app.use( errorHandler);


const server = app.listen(process.env.PORT, console.log(`Server is running in ${process.env.NODE_ENV} on ${process.env.PORT}`.cyan.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    server.close(() => {
        process.exit(1);
    })
});