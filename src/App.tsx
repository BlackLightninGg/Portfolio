import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Skills } from './components/Skills/Skills';

const App = () => {
  return (
      <div className="App">
        <Header />
        <Main />
        <Skills />
      </div>
  );
};

export default App;
