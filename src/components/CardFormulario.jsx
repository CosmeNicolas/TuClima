import {Card, ListGroup, Image,Alert}  from 'react-bootstrap'
import nubes from '../assets/nube.gif'
import lluvia from '../assets/lluvia.gif'


const CardFormulario = ({datosClima}) => {
  if (!datosClima) {
    return <Alert variant='primary' className='mt-3'>No hay datos de clima disponibles</Alert>;
  }

  const redondearTemperatura = (temperatura)=>{
    return Math.round(temperatura / 10)
  }

  const verlluvia = datosClima.main.humidity > 90
 

  return (
    <>
      <div className='my-4 div-contenedor-card'>
        <Card className='my-3 contenedor-card' >
          <Image src={verlluvia ? lluvia : nubes} className='img-fluid cards'/>
        <Card.Body>
          <Card.Title>{datosClima.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Humedad: {datosClima.main.humidity} % </ListGroup.Item>
            <ListGroup.Item>Presion: {datosClima.main.pressure} Pa</ListGroup.Item>
            <ListGroup.Item>Viento: {datosClima.wind.speed} km/h</ListGroup.Item>
            <ListGroup.Item>Sensación Termica: {redondearTemperatura(datosClima.main.feels_like)}°C</ListGroup.Item>
            <ListGroup.Item>Temperatura Minima: {redondearTemperatura(datosClima.main.temp_min)}°C</ListGroup.Item>
            <ListGroup.Item>Temperatura Maxima: {redondearTemperatura(datosClima.main.temp_max)}°C</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}

export default CardFormulario