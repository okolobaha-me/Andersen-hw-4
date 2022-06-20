import { useState } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({ email: '', password: '', name: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setFieldValue = (fieldName, value) => {
    setValues(prevState => ({ ...prevState, [fieldName]: value }));
  };

  const handleChange = e => {
    const fieldName = e.currentTarget.name;
    let value = e.currentTarget.value;

    setFieldValue(fieldName, value);
  };

  return { values, handleChange, isSubmitting, setIsSubmitting };
};
