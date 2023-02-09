import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/bookingPage/BookingPage";
import Navbar from "./components/navbar/Navbar";

import Homepage from "./pages/hompage/Homepage";
import ConfirmPage from "./pages/ConfirmPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
