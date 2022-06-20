import { Field } from '../Field/Field';
import { Button } from '../../Button/Button';
import { Form } from '../Form.Styled';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm';

export const RegistrationForm = ({ onSubmit }) => {
  const { values, handleChange, isSubmitting, setIsSubmitting } = useForm();
  const { email, password, name } = values;

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    await onSubmit({ name, email, password });

    setIsSubmitting(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        onChange={handleChange}
        fieldName={'email'}
        value={email}
        placeholder={'Enter your email'}
        type={'mail'}
      />
      <Field
        onChange={handleChange}
        fieldName={'name'}
        value={name}
        placeholder={'Enter your name'}
        type={'text'}
      />
      <Field
        onChange={handleChange}
        fieldName={'password'}
        value={password}
        placeholder={'Enter your password'}
        type={'password'}
      />

      <Button
        type={'submit'}
        text={'Sign up'}
        onClick={handleSubmit}
        isDisabled={isSubmitting}
      />
    </Form>
  );
};

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
