import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "../../components/BookingForm/BookingForm";

describe("Booking Form", () => {
  test("Renders the BookingForm button", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>
    );
    const buttonElement = screen.getByText("Make Your reservation");
    expect(buttonElement).toBeInTheDocument();
  });

  test("User is able to submit the form with time", () => {
    const availableTimes = "17:00";

    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
        <BookingForm onSubmit={handleSubmit} />
      </BrowserRouter>
    );

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: availableTimes } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({ availableTimes });
  });
});
