import React from "react";
import './App.css';

import Users from "./component/users/users";
import Main from "./component/main/main";
import Cars from "./component/cars/cars";
import Rents from "./component/rents/rents";
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
