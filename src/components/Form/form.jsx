import './form.scss'
import { STATES, DEPARTMENTS } from '@data/data'

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '@redux/formSlice';

import { ValidateFormat, ValidateRequiredFields } from '@helpers/formValidation'
import FormField from '@helpers/formField'
import { ModalComponent, Calendar } from '@components/import'


const DEFAULT_TEXT = 'Select department'
const STATE_DEFAULT_TEXT = 'Choose state'

function Form() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.form.users);

  const getInitialFormValues = () => ({
    firstName: '',
    lastName: '',
    dob: '',
    startDate: '',
    street: '',
    city: '',
    state: STATE_DEFAULT_TEXT,
    zipCode: '',
    department: DEFAULT_TEXT,
  });

  const [formValues, setFormValues] = useState(getInitialFormValues());
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const formatErrors = ValidateFormat(formValues);
    setErrors(formatErrors);
  }, [formValues]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requiredErrors = ValidateRequiredFields(formValues);
    const formatErrors = ValidateFormat(formValues);
    const allErrors = { ...requiredErrors, ...formatErrors };

    if (Object.keys(allErrors).length === 0) {
      // Convertir les dates en chaînes de caractères avant de les envoyer au Redux store
      const formattedValues = {
        ...formValues,
        dob: formValues.dob ? formValues.dob.toISOString().split('T')[0] : '',
        startDate: formValues.startDate ? formValues.startDate.toISOString().split('T')[0] : '',
      };

      // Envoi des données au Redux store
      dispatch(addUser(formattedValues));
      setIsModalOpen(true);
      setFormValues(getInitialFormValues());
    } else {
      setErrors(allErrors);
    }
  };

  const handleChange = (eventOrName, value) => {
    if (typeof eventOrName === 'string') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [eventOrName]: value,
      }));
    } else {
      const { name, value } = eventOrName.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleDateChange = (field, date) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: date,
    }));
  };

  const fields = [
    { type: 'text', id: 'firstName', name: 'firstName', label: 'First Name' },
    { type: 'text', id: 'lastName', name: 'lastName', label: 'Last Name' },
    { type: 'calendar', id: 'dob', name: 'dob', label: 'Date of Birth' },
    { type: 'text', id: 'street', name: 'street', label: 'Street' },
    { type: 'text', id: 'zipCode', name: 'zipCode', label: 'Zip Code' },
    { type: 'text', id: 'city', name: 'city', label: 'City' },
    { type: 'dropdown', id: 'state', name: 'state', label: 'State', options: STATES, defaultText: STATE_DEFAULT_TEXT },
    { type: 'calendar', id: 'startDate', name: 'startDate', label: 'Start Date' },
    { type: 'dropdown', id: 'department', name: 'department', label: 'Department', options: DEPARTMENTS, defaultText: DEFAULT_TEXT },
  ];

  return (
    <div className="formContainer">
      <form className="create__Form" onSubmit={handleSubmit}>
        <div className="w__Form">
          {fields.map((field) => (
            <FormField
              key={field.id}
              type={field.type}
              id={field.id}
              name={field.name}
              value={formValues[field.name]}
              onChange={handleChange}
              label={field.label}
              options={field.options}
              defaultText={field.defaultText}
              error={errors[field.name]}
            />
          ))}
          <button type="submit" className="submit__Button">Submit</button>
        </div>
      </form>
      <ModalComponent isOpen={isModalOpen} />
    </div>
  );
}

export default Form;