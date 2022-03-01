import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const btnAnim = keyframes`
  100% {
    transform: scale(1.2)
  }
`

export const  StyledBox = styled(Box)`
  flex-direction: column;
  text-align: center;
  width: 98%;
  margin: 80px auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px gray;
  padding-bottom: 20px;
  background-color: #FFF
`

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  padding:20px
`

export const StyledBtn = styled(Button)`
  float: right;
  position: relative;
  width: 200px;
  :hover {
    animation: ${btnAnim} 500ms forwards;
  };
`
