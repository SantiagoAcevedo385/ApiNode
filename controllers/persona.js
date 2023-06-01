const {response} =require('express')
const Persona =require('../models/persona')


  const getPersona = async (req, res = response) => {
    try {
      const personas = await Persona.find();
      let sumaEdades = 0;
  
      personas.forEach((persona) => {
        const fechaNacimiento = new Date(persona.fechaNacimiento);
        const edad = calcularEdad(fechaNacimiento);
        sumaEdades += edad;
      });
  
      const promedioEdad = sumaEdades / personas.length;
  
      res.json({
        mensaje: personas,
        promedioEdad: promedioEdad,
      });
    } catch (error) {
      res.status(500).json({
        mensaje: error.message,
      });
    }
  };

const postPersona=async(req, res=response)=>{
    const body= req.query
    let mensaje=''
    const persona=new Persona(body)
    try {
        await persona.save()
        mensaje='Persona registrada'
    } catch (error) {
        mensaje='Error'
        
    }
    res.json({
        mensaje
    })
}
module.exports={
    getPersona,
    postPersona
}