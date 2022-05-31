import React from "react";

import { Route, Routes, useRoutes } from "react-router-dom";

import  MainPage  from "./pages/MainPage.tsx";
import  LoginPage  from "./pages/LoginPage";





function App() {


 
  return (    
    <Routes>  
      {/* <Route path="/login" element={ <LoginPage />} /> */}
      <Route path="" element={ <LoginPage />} />
      

      <Route path="/main" element={ <MainPage />} />
    </Routes>
    
  )
}




export default App;

