import React from 'react';
import './App.css';
import DogsListContainer from './component/DogsListContainer';
import { Route } from 'react-router-dom';
import DogBreedImagesContainer from './component/DogBreedImagesContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={DogsListContainer} />
        <Route path='/dog-breeds/:breed' component={DogBreedImagesContainer} />
      </header>
    </div>
  );
}

export default App;
