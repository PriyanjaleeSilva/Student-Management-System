const mongoose = require('mongoose');

var Attendance = mongoose.model('Attendance', {
    
    course: { type: String },
    username: { type: String },
    attended_days: { type: Number },
    total_days: { type: Number },
    date: {type: Date }
    
});

module.exports = { Attendance };