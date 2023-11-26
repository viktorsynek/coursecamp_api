const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Bootcamp = require('../modules/Bootcamp');

// @desc    Get all bootcamps
// @route   GET /api/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req,res, next) => {
    const bootcamps = await Bootcamp.find();

    res.status(200)
    .json({success:true, count:bootcamps.length, data:bootcamps});
});


// @desc    Get a bootcamp
// @route   GET /api/bootcamps/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req,res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404));
    }
    res.status(200)
    .json({success:true, data:bootcamp});
});


// @desc    Create a bootcamps
// @route   POST /api/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req,res, next) => {
    const newBootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: newBootcamp
    });
});


// @desc    Update a bootcamp
// @route   PUT /api/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req,res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators: true});

    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404));
    }
    res.status(200)
    .json({success:true, data:bootcamp});
});


// @desc    Delete a bootcamp
// @route   DELETE /api/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req,res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if(!bootcamp){
        return next(new ErrorResponse(`Bootcamp not found with ID of ${req.params.id}`, 404));
    }
    res.status(200)
    .json({success:true, data:{}});
});