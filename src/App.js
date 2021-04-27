import React from 'react';
import './App.css';
import { Header, Footer, Main } from './components/Layout/index';



function App() {
  return (
    <div className="App">
      <div className='Content'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
