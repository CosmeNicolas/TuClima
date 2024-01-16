import {Card, ListGroup, Image,Alert}  from 'react-bootstrap'
import nubes from '../assets/nubes.jpg'


const CardFormulario = ({datosClima}) => {
  if (!datosClima) {
    return <Alert variant='primary'>No hay datos de clima disponibles</Alert>;
  }
  return (
    <>
      <Card className='my-3 cards'>
        <Image src={nubes} className='img-fluid'/>
        <Card.Body>
          <Card.Title>{datosClima.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardFormulario