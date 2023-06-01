const {Router}=require('express')

const route= Router()

const {getArriendo,postArriendo}=require('../controllers/arriendo')

route.get('/',getArriendo)

route.post('/',postArriendo)

module.exports=route