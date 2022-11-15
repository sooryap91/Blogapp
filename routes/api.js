const express = require('express')
const { findById } = require('../models/blog')
const router = express.Router()
const DATA = require('../models/blog')
// router.get('/blogdetails',async(req,res)=>{
// try{
//     const list = await DATA.find()
//     res.send(list)
// }
// catch{
//     console.log("error")
// }
// })
// router.get('/assets/images/cakes.jpg',(req,res)=>{
//     console.log(req.files);
// })
// add
//  router.post('/blog',async(req,res)=>{
//  try{
//     console.log(req.body)
//     let item =req.body;
//     const newblog = new DATA(item)
//     const saveblog = await newblog.save()
//     res.send(saveblog)

// }catch(error){
//     console.log("error")
// }
// })
// delete
// router.delete('/blog/:id',async(req,res)=>{
//     try{
//         let id = req.params.id
//         const deleteblog = await DATA.findByIdAndDelete(id)
//     res.send(deleteblog)
//     }
//     catch(error)
// })

// router.put('/blogdetails', async (req, res) => {
//     try {

//         let id = req.body.id
//         let item = {  //to fetch and save data from front end in server
//             name: req.body.name,
//             age: req.body.age
//         }
//         let updateData = { $set: item }
//         let updateStudent = await DATA.findByIdAndUpdate({ 'id': id }, updateData)
//         res.send(updateStudent)
//     } catch (error) {
//         console.log(error)

//     }
// })

// router.get('/blogdetails',async(req,res)=>{
//     try{
//         const list = await DATA.find()
//         res.send(list)
//     }
//     catch(error){
        
//             console.log(error)
//         }
//     }
// )
module.exports = router