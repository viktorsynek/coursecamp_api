const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});

connectDB();

const bootcamps = require('./routes/bootcamps');

const app = express();

if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}

app.use('/api/bootcamps', bootcamps);


const server = app.listen(process.env.PORT, console.log(`Server is running in ${process.env.NODE_ENV} on ${process.env.PORT}`.cyan.bold));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);

    server.close(() => {
        process.exit(1);
    })
});