import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { MyWorks } from './components/MyWorks/MyWorks';
import { Skills } from './components/Skills/Skills';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <MyWorks />
    </div>
  );
};

export default App;
