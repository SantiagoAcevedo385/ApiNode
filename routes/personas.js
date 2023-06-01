const {Router}=require('express')

const route= Router()

const {getPersona,postPersona}=require('../controllers/persona')


route.get('/',getPersona)

route.post('/',postPersona)

module.exports=route