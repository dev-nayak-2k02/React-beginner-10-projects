import React, { useState } from 'react'
import styled from 'styled-components'
const RollDice = () => {
    const[currentDice, setCurrentDice] = useState();
    const generateRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    }
  return (
    <DiceContainer>
        <div className='dice'>
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

    .dice {
        cursor: pointer;

    }

    p {
        font-size: 24px;
    }
`