import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
`
export const Form = styled.form`
    height: calc(100vh / 3);
    display: grid;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
`
export const Label = styled.label`
    width: 100vh;
`

export const Input = styled.input`
    border: none;
    background: transparent;
    border-bottom: 2px solid #fff;
    color: #fff;
    font-size: 20px;
    padding: 5px;
`

export const ResultContainer = styled.div`
    height: calc(100vh / 3);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Result = styled.h1``

export const TikerContainer = styled.div``

export const Ticker = styled(Input)`
    width: 100%;
    font-size: 40px;
`