import {Card, ListGroup, Image,Alert}  from 'react-bootstrap'
import nubes from '../assets/nubes.jpg'


const CardFormulario = ({datosClima}) => {
  if (!datosClima) {
    return <Alert variant='primary' className='mt-3'>No hay datos de clima disponibles</Alert>;
  }


  return (
    <>
      <Card className='my-3 cards'>
        <Image src={nubes} className='img-fluid'/>
        <Card.Body>
          <Card.Title>{datosClima.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Humedad:  {datosClima.main.humidity}</ListGroup.Item>
            <ListGroup.Item>Presion: {datosClima.main.pressure} </ListGroup.Item>
            <ListGroup.Item>Sensación Termica: {datosClima.main.feels_like}</ListGroup.Item>
            <ListGroup.Item>Temperatura Minima: {datosClima.main.temp_min}</ListGroup.Item>
            <ListGroup.Item>Temperatura Maxima: {datosClima.main.temp_max}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardFormulario