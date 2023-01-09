import React, {useState} from 'react';
import Header from './components/front/Header/Header'
import Routes from './components/front/Routes/Routes'
import { BrowserRouter as  Router} from 'react-router-dom';
import Footer from './components/front/Footer/Footer';


const App = () => {

  return (
    <div>
      <Router>
        <Header cartItems={cartItems} />
        <Routes />
          <Footer />
      </Router>
    </div>
  );
};


export default App;