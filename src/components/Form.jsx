import { useEffect } from "react";
import styled from "@emotion/styled"
import { useSelectCoins } from "../hooks/useSelectCoins";
import { coins } from "../data/coins";

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
  const [coin, SelectCoins] = useSelectCoins('Chose your coin', coins);

  useEffect(() => {
    const API = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`
      const response = await fetch(url)
      const result = await response.json()
    }
    API();
  }, [])


  SelectCoins()
  return (
    <from>
      <SelectCoins />
      <InputSubmit type='submit' value='Quote' />
    </from>
  )
}
