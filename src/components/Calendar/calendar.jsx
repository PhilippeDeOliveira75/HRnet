import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getYear, getMonth } from 'date-fns'
import './calendar.scss'

const range = (start, end, step = 1) => {
  const result = []
  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

const Calendar = ({ selectedDate, onDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate)

  const handleChange = (date) => {
    setStartDate(date)
    onDateChange(date)
  }

  const years = range(1900, getYear(new Date()) + 1, 1)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      dateFormat="yyyy-MM-dd"
      placeholderText="Select a date"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="calendar-header">
          <button
            type="button"
            className="calendar-button"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {"<"}
          </button>
          <select
            id="year-select"
            name="year"
            className="calendar-select"
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(Number(value))}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            id="month-select"
            name="month"
            className="calendar-select"
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="calendar-button"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {">"}
          </button>
        </div>
      )}
    />
  )
}

export default Calendar