import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  max-width: 1180px;
  margin: auto;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
`;
