import styled from "@emotion/styled"

const Text = styled.div`
    background-color: #B7322C;
    color: #fff;
    padding:15px;
    font-size: 18px;
    font-family: 'Anek Tamil', sans-serif;
    tex-transform: uppercase;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Text>
        {children}
    </Text>
  )
}

export default Error