import styled from "@emotion/styled"
import { useSelectCoins } from "../hooks/useSelectCoins";

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
  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`
export const Form = () => {

  const [SelectCoins] = useSelectCoins('Chose your coin');

  SelectCoins()
  return (
    <from>
        <SelectCoins />
        <InputSubmit type='submit' value='Quote' />
    </from>
  )
}
