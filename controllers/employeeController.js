const express = require('express')
const { route } = require('express/lib/application')
const router = express.Router()

const Employee = require('../models/employee.model')


router.get('/',(req,res) =>{
    res.render('employee/addOrEdit',{viewTitle:"Add Employee"})
})

router.get('/list',(req,res) =>{
    Employee.find((err,results) =>{
        if(!err){
            // console.log(results)
            res.render('employee/list',{
                list:results
            })
        }else{
            console.log('Error is Retriving Data',err);
        }
    })
})

router.post('/',(req,res) =>{
    // console.log(req.body)
    if(req.body._id==''){
        InsertRecord(req,res)
    }else{
        UpdateRecord(req,res);
    }
})

router.get('/delete/:id',(req,res) =>{
    Employee.findByIdAndDelete(req.params.id,(err,result) =>{
        if(!err) res.redirect("/employee/list")
    })
})

router.get('/:id',(req,res) =>{
    // console.log(req,param.id)
    Employee.findById(req.params.id,(err,result) =>{
        if(!err) res.render('employee/addOrEdit',{viewTitle:"Update Employee",employee:result})
    })
})

function InsertRecord(req,res) {
    let Emp = new Employee()
    Emp.fullName = req.body.fullName; 
    Emp.email = req.body.email;
    Emp.mobile = req.body.mobile;
    Emp.city = req.body.city;
    Emp.save((err,results) =>{
        if(!err){
            // console.log(results)
            res.redirect('/employee/list')
        }else{
            console.log('Error during record insertion'+err)
        }
    })
}

function UpdateRecord(req,res) {
    Employee.findOneAndUpdate({_id:req.body._id},req.body,{new:true},(err,result) =>{
        if(!err) res.redirect('/employee/list')
    })
}

module.exports = router