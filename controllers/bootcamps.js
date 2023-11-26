// @desc    Get all bootcamps
// @route   GET /api/bootcamps
// @access  Public
exports.getBootcamps = (req,res, next) => {
    res.status(200)
    .json({success:true, message:'Show all bootcamps'});
}


// @desc    Get a bootcamp
// @route   GET /api/bootcamps/:id
// @access  Public
exports.getBootcamp = (req,res, next) => {
    res.status(200)
    .json({success:true, message:`Get bootcamp ${req.params.id}`});
}


// @desc    Create a bootcamps
// @route   POST /api/bootcamps
// @access  Private
exports.createBootcamp = (req,res, next) => {
    res.status(201)
    .json({success:true, message:'Create new bootcamp'});
}


// @desc    Update a bootcamp
// @route   PUT /api/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req,res, next) => {
    res.status(200)
    .json({success:true, message:`Update ${req.params.id} bootcamp`});
}


// @desc    Delete a bootcamp
// @route   DELETE /api/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req,res, next) => {
    res.status(200)
    .json({success:true, message:`Delete ${req.params.id} bootcamp`});
}