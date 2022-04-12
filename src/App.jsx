import styled from "@emotion/styled"
import { Form } from "./components/Form"
import ImagenCripto from './img/imagen-criptos.png'

const Heading = styled.h1`
  font-family: 'Anek Tamil', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto
  }
`
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width:90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 400px;
  width:80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {

  return (
    <Container>
      <Imagen src={ImagenCripto} alt='Imagen' />
      <div>
        <Heading>Trade Cryptocurrencies Instantly</Heading>
        <Form />
      </div>

    </Container>
  )
}

export default App
