import React, { useState, useEffect } from 'react';
import './App.css';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { RawSequence } from './models';

async function getRawSequences() {
  console.log('Inside UseEffect');
  try {
    return await DataStore.query(RawSequence, Predicates.ALL);
    // console.log(
    //   'RawSequences retrieved successfully!',
    //   JSON.stringify(response, null, 2)
    // );
  } catch (error) {
    console.log('Error retrieving RawSequences ', error);
    return { message: 'Nothing could be retrieved!' };
  }
  // return response;
}

function App() {
  const [rawSequences, setRawSequences] = useState(null);

  useEffect(() => {
    getRawSequences().then((res) => {
      setRawSequences(res);
    });
  }, []);

  return (
    <div className="App">
      <h2>Raw Sequences</h2>
      {rawSequences &&
        rawSequences.map((rawSequence) => {
          return (
            <>
              <div>{`Name: ${rawSequence.name}`}</div>
              <div>{`Index: ${rawSequence.index}`}</div>
              <div>{`Is pathological: ${rawSequence.pathological}`}</div>
            </>
          );
        })}
    </div>
  );
}

export default App;
