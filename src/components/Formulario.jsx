import { useState } from 'react'
import {Form, Button}  from 'react-bootstrap'


const Formulario = () => {

  const [ciudad, setCiudad] = useState([])
  console.log(ciudad)

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(ciudad)
  }


  const obtenerDatosApi = async () => {

    const respuestaApiClima = await fetch('http://api.openweathermap.org/geo/1.0/direct?q=Tucuman&limit=5&appid=7a9a4933445cff553f7abda64a0617e6')
    const datosApiclima = await (respuestaApiClima).json()
    console.log(respuestaApiClima)
    console.log(datosApiclima)

  }


  return (
    <Form onChange={handleSubmit} className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Ingresa una Ciudad</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Ingresa una ciudad" 
        value={ciudad}
        onChange={(e)=>setCiudad(e.target.value)}/>
      </Form.Group>
      <div className='text-center'>
        <Button onClick={obtenerDatosApi}  variant="primary" type="button">
        Consultar
      </Button>
      </div>
    </Form>
  )
}

export default Formulario