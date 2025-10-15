import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/MainPage/Main';
import Aside from './components/MainPage/Aside';
import Footer from './components/Footer';
import Buttons from './components/MainPage/Buttons';

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      <main>
        <div className="content-layout">
          
          <Main />
          <Aside />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
