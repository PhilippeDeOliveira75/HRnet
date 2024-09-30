import React from 'react';
import Dropdown from 'dropdowndelamort';
import { Calendar } from '@components/import';

const FormField = ({ type, id, name, value, onChange, label, options, defaultText, error }) => {

  if (type === 'dropdown') {
    return (
      <div className="w__labelAndInput dropdown__Container">
        <span className="label__Title">{label}</span>
        <Dropdown
          id={id}
          selection={options}
          defaultText={defaultText}
          value={value || ''}
          onChange={(selectedValue) => onChange(name, selectedValue)}
        />

        {error && <span className="error">{error}</span>}
      </div>
    );
  }

  if (type === 'calendar') {
    return (
      <div className="w__labelAndInput">
        <span className="label__Title" htmlFor={id}>{label}</span>
        <Calendar
          selectedDate={value || null} // Utilise null si la valeur est undefined
          onDateChange={(date) => onChange(name, date)}
        />
        {error && <span className="error">{error}</span>}
      </div>
    );
  }

  return (
    <div className="w__labelAndInput">
      <label className="label__Title" htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value || ''} // Assure-toi qu'il n'est jamais undefined
        onChange={onChange}
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default FormField;