const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log(err);
  
    // Bad ObjectId
    if(err.name === "CastError"){
        const message = `Bootcamp not found iwth id of ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    // Duplicates key
    if(err.code === 11000){
        const message = `This bootcamp was already created, duplicates are not allowed`;
        error = new ErrorResponse(message, 400);
    }

    // Validation error
    if(err.name === "ValidationError"){
        const message = Object.values(err.erros).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error"
    });
}

module.exports = errorHandler;