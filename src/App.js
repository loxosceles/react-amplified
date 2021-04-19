import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { RawSequence } from './models';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Inside UseEffect');
    return async () => {
      const response = await DataStore.save(
        new RawSequence({
          index: 1021,
          is_labeling_candidate: true,
          is_useless: true,
          patientID: 'a3f4095e-39de-43d2-baf4-f8c16f0f6f4d',
        })
      );
      setData(response);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
