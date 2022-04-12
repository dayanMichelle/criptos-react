import styled from "@emotion/styled"
const Label = styled.label`
    color: #fff;
`

export const useSelectCoins = (label) => {
    const Selectcoins = () => (
        <>
         <Label htmlFor="">{label}</Label>
        </>

    )
    
    return [Selectcoins]
}
