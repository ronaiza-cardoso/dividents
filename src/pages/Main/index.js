import React, { useState } from 'react'

import moment from 'moment'

import { stockData } from '../../mock/data'

import { 
    Container,
    Form,
    Label,
    Input,
    ResultContainer,
    Result,
} from './style'

moment.locale('pt-br');

function Main() {
    const [inputState, setInputState] = useState({
        "n-acoes": "",
        "d-inicio": stockData[stockData.length - 1]["pd"],
        "d-fim": stockData[0]["pd"],
    })

    function sumValues(period) {
        return period.reduce((acc, cur) => acc + cur.v, 0)
    }

    function calculateResult() {
        const normalizeDate = date => date.split('/').reverse().join('-')
        const init = normalizeDate(inputState["d-inicio"])
        const end = normalizeDate(inputState["d-fim"])
        const betwenDate = stockData.filter(item => moment(normalizeDate(item.pd)).isBetween(init, end))

        return sumValues(betwenDate)
    }

    function handleInputState({ value, name }) {
        setInputState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const result = inputState["n-acoes"] * calculateResult()
    
    return (
        <Container>
            <Form>
                <Label>N. de Ações</Label>
                <Input
                    type="number"
                    name="n-acoes"
                    placeholder="100"
                    value={inputState["n-acoes"]}
                    onChange={event => handleInputState({ value: event.target.value, name: "n-acoes" })}
                />
                <Label>Inicio</Label>
                <Input
                    type="input"
                    name="d-inicio"
                    placeholder="01/02/2016"
                    value={inputState["d-inicio"]}
                    onChange={event => handleInputState({ value: event.target.value, name: "d-inicio" })}
                />
                <Label>Fim</Label>
                <Input
                    type="input"
                    name="d-fim"
                    placeholder="01/02/2020"
                    value={inputState["d-fim"]}
                    onChange={event => handleInputState({ value: event.target.value, name: "d-fim" })}
                />
            </Form>

            <ResultContainer>
                <Result>R$ {result.toFixed(2)}</Result>
            </ResultContainer>
        </Container>
    )
}

export default Main