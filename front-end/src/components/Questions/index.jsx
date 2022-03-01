/* eslint-disable react-hooks/exhaustive-deps */
import React, {  } from 'react';
import { useState, useEffect } from 'react';
import { 
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MainForm } from './style';
import { getAnswers, updateAnswers } from '../../services/answersAPI';
import swal from 'sweetalert';

const Questions = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState({});

  useEffect(() => {
    getAnswers(setData);
  }, []);

  async function handleClick() {
    await updateAnswers(data, feedback, setData);

    swal("Obrigado!", "Seu feedback foi enviado!", "success")
    .then(() => {
      navigate('/results');
    });
  }

  const handleChange = (e) => {
    setFeedback((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const checkbtn = () => {
    if (Object.keys(feedback).length < 2) {
      return true;
    }
    return false;
  }

  return (
    <MainForm>
      <Typography variant="h4" component="div" gutterBottom>
        Pesquisa
      </Typography>
      {
        data.map((each) => {
          const { id, result, question, row } = each;
          return (
            <FormControl key={ id }>
              <FormLabel id={ `label-${id}` }>
                { question }
              </FormLabel>
              <RadioGroup
                row={ row }
                aria-labelledby={ `label-${id}` }
                name={ id }
                onChange={ (event) => handleChange(event) }
              >
                { result.map((info, index) => {
                  return (
                    <FormControlLabel 
                      key={ index } 
                      value={ info.type } 
                      control={<Radio />} 
                      label={ info.type }
                    />
                  )
                })}
              </RadioGroup>
            </FormControl>
          )
        })
      }
      <Button 
        variant="contained"
        type="button"
        onClick={ () => handleClick() }
        disabled={ checkbtn()}
      >
        Enviar
      </Button>
    </MainForm>
  )
}

export default Questions;