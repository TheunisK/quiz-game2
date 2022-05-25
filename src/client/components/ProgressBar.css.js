import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  width: auto;
  border-radius: 15px;
  height: 20px;
  background: rgba(0, 0, 0, 0.25);
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 20px;
  border-radius: 15px;
  background: dodgerblue;
`;