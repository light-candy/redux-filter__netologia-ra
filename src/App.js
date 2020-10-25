import React from 'react';
import { ServiceList } from './components/serviceList';
import { ServiceAdd } from './components/serviceAdd';
import { ServiceFilter } from './components/serviceFilter';
import './App.css';

function App() {
  return (
      <>
       <ServiceFilter />
       <ServiceAdd />
       <ServiceList />
      </>
  );
}

export default App;
