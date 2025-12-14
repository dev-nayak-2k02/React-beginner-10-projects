import React from 'react'
import styled from 'styled-components'
const StartGame = () => {
  return (
    <Container>
        <img src="/images/dices.png" alt="" />
        <div>
            <h1>DICE GAME</h1>
            <Button>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
`
const Button = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    gap: 10px;
    width: 220px;
    height: 44px;
    background: #000000;
    border-radius: 5px;
`