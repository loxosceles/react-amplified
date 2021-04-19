import React, { useState, useEffect } from 'react';
import './App.css';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Patient } from './models';

async function getPatients() {
  console.log('Inside UseEffect');
  try {
    return await DataStore.query(Patient, Predicates.ALL);
    // console.log(
    //   'RawSequences retrieved successfully!',
    //   JSON.stringify(response, null, 2)
    // );
  } catch (error) {
    console.log('Error retrieving Patient', error);
    return { message: 'Nothing could be retrieved!' };
  }
  // return response;
}

function App() {
  const [patients, setPatients] = useState(null);

  useEffect(() => {
    getPatients().then((res) => {
      setPatients(res);
    });
  }, []);

  return (
    <div className="App">
      <h2>Patients</h2>
      {patients &&
        patients.map((patient) => {
          return (
            <>
              <div>{`Name: ${patient.name}`}</div>
              <div>{`Index: ${patient.index}`}</div>
              <div>{`Is pathological: ${patient.pathological}`}</div>
            </>
          );
        })}
    </div>
  );
}

export default App;
