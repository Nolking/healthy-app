import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainRoutes from './Components/Routes'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainRoutes></MainRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
