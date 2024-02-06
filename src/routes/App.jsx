import React, { useState } from "react";
import HomeComponent from "../componets/HomeComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../Dashboard";
import Head from "../componets/Head";
function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const  handleLogin =(status) =>{setLoggedIn(status);};
    return(
        <BrowserRouter>
        {/* <Head/> */}
          <Routes>
              <Route path="/" element={<HomeComponent/>}/>
              <Route 
              exact 
              path="/dashboard" 
              element={
              <DashBoard/>}/> 
          </Routes>
        </BrowserRouter>
    )
}

export default App;