import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reducer, {initialState} from "./Reducer";
import {StateProvider} from "./StateProvider";

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

