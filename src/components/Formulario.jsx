import {Form, Button}  from 'react-bootstrap'


const Formulario = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ingresa una Ciudad</Form.Label>
        <Form.Control type="email" placeholder="Ingresa una ciudad" />
        <Form.Text className="text-muted">
          Te diremos como estara el clima
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Formulario