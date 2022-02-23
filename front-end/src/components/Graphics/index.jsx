import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../firebase-config';
import { ResponsiveBar } from '@nivo/bar'

const Graphics = () => {
  const [data, setData] = useState([]);
  const answersCollectionRef = collection(db, 'answers')

  useEffect(() => {
    const fetch = async () => {
      const data = await getDocs(answersCollectionRef);

      setData(data.docs.map((doc) => ({...doc.data()})));
    };

    fetch();
  }, []);

  return (
    <div>
      {
        data.map((each, index) => {
          const { result, question } = each;

          return (
            <div key={ index } style={{ height: "400px", width: "900px" }}>
              <h1>{ question }</h1>
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