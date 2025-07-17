import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import '@testing-library/jest-dom'; 


const mockOnSubmissionSuccess = jest.fn();

describe('BookingForm', () => {
  // Test 1: Renders the "Choose date" label (static text)
  test('Renders the "Choose date" label', () => {
    render(<BookingForm onSubmissionSuccess={mockOnSubmissionSuccess} />);
    const dateLabel = screen.getByLabelText(/Choose date/i);
    expect(dateLabel).toBeInTheDocument();
  });

  // Test 2: Tests the initial available times (simulating initializeTimes behavior)
  test('Initial available times are correctly rendered in the select input', () => {
    render(<BookingForm onSubmissionSuccess={mockOnSubmissionSuccess} />);
    const timeSelect = screen.getByLabelText(/Choose time/i);

    // Assert that the select element is present
    expect(timeSelect).toBeInTheDocument();

    // Assert that the expected initial options are present
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    expectedTimes.forEach(time => {
      expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
    });

    // Assert the total number of options
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(expectedTimes.length);
  });

  // Test 3: Tests that available times do NOT change when a date is selected (simulating updateTimes behavior before logic is implemented)
  test('Available times do not change when a date is selected (logic to be implemented later)', () => {
    render(<BookingForm onSubmissionSuccess={mockOnSubmissionSuccess} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    const timeSelect = screen.getByLabelText(/Choose time/i);

    // Get the initial options' text content
    const initialOptions = Array.from(timeSelect.options).map(option => option.textContent);

    // Simulate changing the date input
    fireEvent.change(dateInput, { target: { value: '2025-12-25' } });

    // Get the options' text content after date change
    const currentOptions = Array.from(timeSelect.options).map(option => option.textContent);

    // Assert that the options remain the same as the initial ones
    expect(currentOptions).toEqual(initialOptions);
  });
});