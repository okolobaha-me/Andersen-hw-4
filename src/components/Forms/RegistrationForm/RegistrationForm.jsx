import { Field } from '../Field/Field';
import { Button } from '../../Button/Button';
import { Form, FormOptions } from '../Form.Styled';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm';

export const RegistrationForm = ({ onSubmit, closeModal }) => {
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

      <FormOptions>
        <Button
          type={'submit'}
          text={'Sign up'}
          onClick={handleSubmit}
          isDisabled={isSubmitting}
        />
        <Button
          type={'button'}
          text={'Cansel'}
          onClick={closeModal}
          isDisabled={isSubmitting}
        />
      </FormOptions>
    </Form>
  );
};

RegistrationForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
