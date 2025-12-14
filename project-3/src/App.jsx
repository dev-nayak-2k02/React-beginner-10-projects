import React from 'react'
import styled from 'styled-components'

const App = () => {
  return (
    <div>
      <Button>Click me i'm styled-component</Button>
    </div>
  )
}

export default App

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 4px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`