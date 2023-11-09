import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Error from './_utils/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />

            <Route path='/home' element={<Home />} />

            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
