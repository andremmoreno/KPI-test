/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { ResponsiveBar } from '@nivo/bar';
import { Typography } from '@mui/material';
import { GraphicDiv, MainDiv } from './style';

const Graphics = () => {
  const [data, setData] = useState([]);
  const answersCollectionRef = collection(db, 'answers')

  const getAnswers = async () => {
    const data = await getDocs(answersCollectionRef);

    console.log('Requisição');

    setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };
  
  useEffect(() => {

    getAnswers();
  }, []);

  return (
    <MainDiv>
      {
        data.map((each, index) => {
          const { result, questionTitle } = each;

          return (
            <GraphicDiv key={ index }>
              <Typography variant="h4">{ questionTitle }</Typography>
              <ResponsiveBar
                data={result}
                keys={["value"]}
                indexBy="type"
                margin={{ top: 50, right: 10, bottom: 50, left: 45 }}
                padding={0.4}
                valueScale={{ type: "linear" }}
                colors="#3182CE"
                animate={true}
                enableLabel={false}
                axisTop={null}
                axisRight={null}
                axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Número de Respostas",
                  legendPosition: "middle",
                  legendOffset: -40
                }}
               />
            </GraphicDiv>
          )
        })
      }
    </MainDiv>
  )
}

export default Graphics;