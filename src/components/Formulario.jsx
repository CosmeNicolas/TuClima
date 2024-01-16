import { useState } from 'react'
import {Form, Button}  from 'react-bootstrap'


const Formulario = () => {

  const [ciudades, setCiudades] = useState([])
  console.log('desde el input')

  const handleForm =(e)=>{
    setCiudades(e.target.value)
    console.log(setCiudades)
  }


  return (
    <Form onChange={handleForm} className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Ingresa una Ciudad</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Ingresa una ciudad" 
        value={ciudades}
        onChange={(e)=>setCiudades(e.target.value)}/>
      </Form.Group>
      <div className='text-center'>
      <Button  variant="primary" type="submit">
        Consultar
      </Button>
      </div>
    </Form>
  )
}

export default Formulario