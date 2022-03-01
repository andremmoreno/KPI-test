import React from 'react';
import { StyledBox, StyledBtn, BtnDiv } from './style';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/feedback')
  }
  return (
    <StyledBox>
      <Typography  variant="h1" component="div" gutterBottom>
        Boas-vindas
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        "Todos precisamos de pessoas para nos dar feedback. É assim que melhoramos"
      </Typography>
      <Typography variant="h4" gutterBottom component="div">- Bill Gates</Typography>
      <BtnDiv>
        <StyledBtn
          variant="contained"
          type="button"
          onClick={ () => handleClick() }
          >
          Responder
        </StyledBtn>
      </BtnDiv>
    </StyledBox>
  )
}

export default Welcome;