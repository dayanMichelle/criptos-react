import { useEffect, useState } from "react";
import styled from "@emotion/styled"
import { useSelectCoins } from "../hooks/useSelectCoins";
import { coins } from "../data/coins";
import Error from "./Error";

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weidth: 400;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`
export const Form = () => {
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)
  const [coin, SelectCoins] = useSelectCoins('Chose your coin', coins)
  const [cryptoCoin, SelectCryptoCoin] = useSelectCoins('Chose your crypto', cryptos)

  useEffect(() => {
    const API = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
      const response = await fetch(url)
      const result = await response.json()
      const arrayCrypto = result.Data.map(crypto => {
        {
          const Object = {
            id: crypto.CoinInfo.Name,
            name: crypto.CoinInfo.FullName,
          }
          return Object
        }
      })
      setCryptos(arrayCrypto)
    }
    API();
  }, [])


  const handleSubmit = e => {
    e.preventDefault()
    if ([coin, cryptoCoin].includes('')) {
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <>
      {error && <Error>All fields are required</Error>}
      <form onSubmit={handleSubmit}>
        <SelectCoins />
        <SelectCryptoCoin />
        <InputSubmit type='submit' value='Quote' />
      </form>
    </>

  )
}
