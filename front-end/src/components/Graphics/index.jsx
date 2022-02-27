/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { ResponsiveBar } from '@nivo/bar';
import { Typography } from '@mui/material';

const Graphics = () => {
  const [data, setData] = useState([]);
  const answersCollectionRef = collection(db, 'answers')

  const getAnswers = async () => {
    const data = await getDocs(answersCollectionRef);

    setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  };
  
  useEffect(() => {

    getAnswers();
  }, []);

  return (
    <div>
      {
        data.map((each, index) => {
          const { result, questionTitle } = each;

          return (
            <div key={ index } style={{ height: "400px", width: "900px" }}>
              <Typography variant="h4">{ questionTitle }</Typography>
              <ResponsiveBar
                data={result}
                keys={["value"]}
                indexBy="type"
                margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
            </div>
          )
        })
      }
    </div>
  )
}

export default Graphics;