import { useState } from 'react'
import {Form, Button}  from 'react-bootstrap'
import CardFormulario from './CardFormulario'


const Formulario = () => {

  const [ciudad, setCiudad] = useState([])
  const [datosClima, setDatosClima] = useState(null)
  console.log(ciudad)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const respuestaApiClima = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=7a9a4933445cff553f7abda64a0617e6`)
    const datosClima = await (respuestaApiClima).json()
    setDatosClima(datosClima)
    console.log(datosClima)
    setCiudad('')
  }


 

  return (
    <>
    <Form onSubmit={handleSubmit} className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Ingresa una Ciudad</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Ingresa una ciudad" 
        value={ciudad}
        onChange={(e)=>setCiudad(e.target.value)}/>
      </Form.Group>
      <div className='text-center'>
        <Button  variant="primary" type="submit">
        Consultar
      </Button>
      </div>
    </Form>
      <CardFormulario datosClima={datosClima} />
    </>
  )
}

export default Formulario