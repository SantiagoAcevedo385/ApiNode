const {response} =require('express')
const Arriendo =require('../models/arriendo')

const getArriendo=async(req, res=response) => {
    let mensaje=''
    try {
        const arriendos= await Arriendo.find()
        mensaje= arriendos
    } catch (error) {
        mensaje= error
        
    }
    res.json({
        mensaje
    })
}
const postArriendo=async(req, res=response)=>{
    const body= req.query
    let mensaje=''
    const arriendo=new Arriendo(body)
    try {
        await arriendo.save()
        mensaje='arriendo registrado'
    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
module.exports={
    getArriendo,
    postArriendo

}