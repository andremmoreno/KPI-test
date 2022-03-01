import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase-config';

const answersCollectionRef = collection(db, 'answers')

export const getAnswers = async (setData) => {
  const data = await getDocs(answersCollectionRef);
  console.log('Requisição');

  setData(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
};

export const updateAnswers = async (data, feedback, setData) => {
  const allIds = [];
  const newData = data;
  console.log('Update');

  await getAnswers(setData);

  Object.keys(feedback).forEach((item) => {
    allIds.push(item.id)
    newData.forEach((each) => {
      const { result } = each;
      result.forEach((info) => {
        if (info.type === feedback[item]) {
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

    await updateDoc(answersDoc, newField)
  })    
}