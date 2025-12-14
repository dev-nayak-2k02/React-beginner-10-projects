import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector selecttNumber={selectedNumber} setSelectNumber={setSelectedNumber} />
      </div>
      <RollDice/>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  max-width: 1180px;
  margin: auto;
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
