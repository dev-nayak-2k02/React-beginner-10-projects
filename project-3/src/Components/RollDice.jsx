import React from 'react'
import styled from 'styled-components'
const RollDice = () => {
  return (
    <DiceContainer>
        <div>
            <img src='/images/dice/dice_1.png' alt='dice_1_' />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice


const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;

    p {
        font-size: 24px;
    }
`