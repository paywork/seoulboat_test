import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/layout/Header";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import './App.css';

function App() {
  return (
    <Router>
     <div className={"App"}>
         <Header />
         <Route exact path="/" component={Landing} />
         <div className={"container"}>
             <Route exact path={"/signup"} component={Signup} />
             <Route exact path={"/login"} component={Login} />
         </div>
         <Footer />
     </div>
    </Router>


  );
}

export default App;
