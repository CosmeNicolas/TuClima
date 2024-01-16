import {Card, ListGroup, Image,Alert}  from 'react-bootstrap'
import nubes from '../assets/nubes.jpg'


const CardFormulario = ({datosClima}) => {
  if (!datosClima) {
    return <Alert variant='primary' className='mt-3'>No hay datos de clima disponibles</Alert>;
  }

  const redondearTemperatura = (temperatura)=>{
    return Math.round(temperatura / 10)
  }
 

  return (
    <>
      <Card className='my-3 cards'>
        <Image src={nubes} className='img-fluid'/>
        <Card.Body>
          <Card.Title>{datosClima.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Humedad: {datosClima.main.humidity} % </ListGroup.Item>
            <ListGroup.Item>Presion: {datosClima.main.pressure} Pa</ListGroup.Item>
            <ListGroup.Item>Presion: {datosClima.wind.speed} km/h</ListGroup.Item>
            <ListGroup.Item>Sensación Termica: {redondearTemperatura(datosClima.main.feels_like)}°C</ListGroup.Item>
            <ListGroup.Item>Temperatura Minima: {redondearTemperatura(datosClima.main.temp_min)}°C</ListGroup.Item>
            <ListGroup.Item>Temperatura Maxima: {redondearTemperatura(datosClima.main.temp_max)}°C</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardFormulario