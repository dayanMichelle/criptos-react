import styled from "@emotion/styled"

const Result = styled.div`
    color: #fff;
    font-family: 'Anek Tamil', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Text = styled.p`
font-size: 18px;
span {
    font-weight: 700;
}
`
const Price = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Results = ({ result }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;
    return (
        <Result>
            <Imagen 
                src={`https://cryptocompare.com/${IMAGEURL}`} 
                alt='imagen crypto' 
            />
            <div>
                <Price>The price is <span>{PRICE}</span></Price>
                <Text>The highest price of the day<span>{HIGHDAY}</span></Text>
                <Text>The lowest price of the day <span>{PRICE}</span></Text>
                <Text>Variation last 24 hours<span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last update<span>{LASTUPDATE}</span></Text>
            </div>
        </Result>
    )
}

export default Results