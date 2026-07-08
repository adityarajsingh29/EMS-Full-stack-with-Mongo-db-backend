const mangoose = require('mongoose');

const employeeSchema = new mangoose.Schema({
    name: {type: String, required: true},
    department: {type: String, required: true},
    salary: {type: Number, required: true},
})

module.exports = mangoose.model('Employee', employeeSchema);
    