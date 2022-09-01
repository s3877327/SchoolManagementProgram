const Student = require('../model/Student')
const fs = require('fs')

const create = async (req, res) => {
    try {
        let fields = req.fields
        let files = req.files

        let student = new Student(fields);
        //handle image 
        if(files.image){
            student.image.data = fs.readFileSync(files.image.path);
            student.image.contentType = files.image.type;
        }
        student.save((error, result)=>{
            if(error){
                console.log('Cannot save student', error)
                res.status(400).send('Saving student error')
            }
            res.json(result);
        })

    } catch (err) {
        console.log(err)
        res.status(400).json({
            err: err.message
        })
    }
}

const students = async (req, res) => {
    let all = await Student.find({postedBy: req.user})
    .limit(24)
    .select('-image.data')
    .populate('postedBy', '_id name')
    .exec();
    //console.log(all)
    res.json(all);
}

const image = async (req, res) => {
    let student = await Student.findById(req.params.studentId).exec();
    if(student && student.image && student.image.data !==null){
        res.set('Content-Type', student.image.contentType)
        return res.send(student.image.data)
    }
}

const deleteStudent = async (req, res) => {
    let removed = await Student.findByIdAndDelete(req.params.studentId)
      .select("-image.data")
      .exec();
    res.json(removed);
  };



module.exports = {create, students, image, deleteStudent}