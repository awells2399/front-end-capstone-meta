import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ onSubmit }) {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const navigate = useNavigate();

  function navigateToConfirmPage() {
    navigate("/confirm");
  }

  const initDate = new Date().toISOString().slice(0, 10);
  let initTimes = fetchAPI(new Date());

  const [date, setDate] = useState(initDate);
  const [availableTimes, setAvailableTimes] = useState(initTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAPI();
    navigateToConfirmPage();
    onSubmit({ availableTimes });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Book a Table</h1>
        <label htmlFor="res-date">Choose date</label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          id="res-date"
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          value={availableTimes}
          onChange={(e) => setAvailableTimes(e.target.value)}
          id="res-time"
        >
          {initTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          id="occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <button type="submit">Make Your reservation</button>
      </fieldset>
    </form>
  );
}

export default BookingForm;

// import React, { useState } from "react";

// const BookingForm = ({ state, dispatch }) => {
//   const initialState = {
//     name: "",
//     guests: 1,
//     date: new Date(),
//     resTime: "",
//     occasion: "",
//   };

//   const [res, setRes] = useState(initialState);

//   const handleChange = (event) => {
//     const inputchange = event.target.name;
//     const statusCopy = { ...res };

//     statusCopy[inputchange] = event.target.value;
//     setRes(statusCopy);
//   };

//   const handleSubmit = () => {};

//   return (
//     <div>
//       {" "}
//       <form action="" onSubmit={handleSubmit}>
//         <label for="name">Name of party</label>
//         <input
//           required
//           name="name"
//           value={res["name"]}
//           onChange={handleChange}
//           type="text"
//           placeholder="Party Name"
//         />

//         <label for="res-date">Date</label>
//         <input
//           required
//           name="date"
//           value={res["date"]}
//           onChange={handleChange}
//           type="date"
//         />

//         <label for="res-time">Reservation Time</label>
//         <select required name="resTime" value={state} onChange={handleChange}>
//           {state.map((time, index) => (
//             <option>{time}</option>
//           ))}
//         </select>

//         <label for="guests">Number of Guests</label>
//         <input
//           required
//           name="guests"
//           value={res["guests"]}
//           onChange={handleChange}
//           type="number"
//           placeholder={1}
//           min={1}
//           max={10}
//         />

//         <label for="occasion">Occasion</label>
//         <select id="occasion">
//           <option>Birthday</option>
//           <option>Anniversary</option>
//         </select>

//         <button type="submit">Reserve Table</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;
