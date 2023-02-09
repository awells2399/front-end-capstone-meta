import BookingForm from "../../components/bookingForm/BookingForm";
import "./BookingPage.css";

function Booking() {
  return (
    <>
      <BookingForm />
    </>
  );
}

export default Booking;

// import React, { useState, useReducer } from "react";
// import BookingForm from "../../components/bookingForm/BookingForm";

// const BookingPage = () => {
//   const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//   const reducer = (state, action) => {
//     let newState;
//     console.log("Inside reducer");
//     // switch (action.type) {
//     //   case "BOOK_TIME":
//     //     newState = state.filter((item) => item !== action.time);
//     //     break;

//     //   default:
//     //     throw new Error();
//     // }
//     return newState;
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <BookingForm state={state} dispatch={dispatch} />
//     </div>
//   );
// };

// export default BookingPage;
