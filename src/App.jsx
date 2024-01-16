import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import './App.css'

function App() {
  

  return (
    <>
    <Container className='main'>
    <h1 className="text-center mt-5">TuClima</h1>
    <Formulario/>
    </Container>
    <Footer/>
    </>
  )
}

export default App
