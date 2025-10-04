import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
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
