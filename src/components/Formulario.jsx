import {Form, Button}  from 'react-bootstrap'


const Formulario = () => {
  return (
    <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-light'>Ingresa una Ciudad</Form.Label>
        <Form.Control type="email" placeholder="Ingresa una ciudad" />
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