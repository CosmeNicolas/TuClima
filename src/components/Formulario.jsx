import { useState } from 'react'
import { Form, Button, Alert, Spinner } from 'react-bootstrap'
import CardFormulario from './CardFormulario'


const Formulario = () => {

  const [ciudad, setCiudad] = useState('')
  const [datosClima, setDatosClima] = useState(null)
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ciudad.trim()) {
      setError('Por favor, ingresa el nombre de una ciudad.');
      return;
    }

    try {
      setCargando(true);

      const respuestaApiClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=7a9a4933445cff553f7abda64a0617e6`);
      const datosClima = await respuestaApiClima.json();

      if (respuestaApiClima.ok) {
        setDatosClima(datosClima);
        setError(null);
      } else {
        setError('No se encontraron datos para la ciudad ingresada.');
      }

      setCargando(false);
    } catch (error) {
      console.error('Error al consultar', error);
      setCargando(false);
      setError('Hubo un error al consultar el clima. Por favor, intenta nuevamente.');
    }
  };



  return (
    <>
      <Form onSubmit={handleSubmit} className='mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-light'>Ingresa una Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa una ciudad"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)} />
        </Form.Group>
        <div className='text-center'>
          <Button variant="primary" type="submit" disabled={cargando}>
            {cargando ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Consultar'}
          </Button>
        </div>
      </Form>

      {error && <Alert variant='danger' className='mt-3'>{error}</Alert>}

      <CardFormulario datosClima={datosClima} />
    </>
  )
}

export default Formulario