import styled from "@emotion/styled"
import { useState } from "react"

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Anek Tamil', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin:15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`
export const useSelectCoins = (label, options) => {
    const [state, setState] = useState('')
    const Selectcoins = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">-- Select --</option>
                {options.map(option => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </Select>
        </>

    )

    return [ state ,Selectcoins ]
}
