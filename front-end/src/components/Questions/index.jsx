/* eslint-disable react-hooks/exhaustive-deps */
import React, {  } from 'react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
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

const Questions = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [feedback, setFeedback] = useState({});
  const answersCollectionRef = collection(db, 'answers')

  const getAnswers = async () => {
    const data = await getDocs(answersCollectionRef);

    setData(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
  };

  useEffect(() => {

    console.log("Req");

    getAnswers();
  }, []);

  async function handleClick() {
    await updateAnswers();

    navigate('/results');
  }

  const updateAnswers = async () => {
    const allIds = [];
    const newData = data;

    await getAnswers();

    Object.keys(feedback).forEach((item) => {
      allIds.push(item.id)
      newData.forEach((each) => {
        const { result } = each;
        result.forEach((info) => {
          if (info.type === feedback[item]) {
            console.log(info.value);
            info.value = info.value + 1;
          }
        }) 
      })
    })
    
    newData.forEach( async (each) => {
      const { id, result } = each;
      const answersDoc = doc(db, "answers", id);

      const newField = {
        result,
      }
      console.log(newField);
      console.log(newData);

      await updateDoc(answersDoc, newField)
    })    
  }

  const handleChange = (e) => {
    setFeedback((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <MainForm>
      <Typography variant="h4" component="div" gutterBottom>
        Pesquisa
      </Typography>
      <FormControl>
      {
        data.map((each, index) => {
          const { id, result, question, row } = each;
          return (
            <div key={ id }>
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
            </div>
          )
        })
      }
      </FormControl>
      <Button 
        variant="contained"
        type="button"
        onClick={ () => handleClick() }
      >
        Enviar
      </Button>
    </MainForm>
  )
}

export default Questions;