import React from "react";
import './App.css';
import Users from "./component/users-component/users";
import Main from "./component/main-component/main";
import Cars from "./component/cars-component/cars";
import Rents from "./component/rents-component/rents";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/users" element={<Users />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="rents" element={<Rents />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
