import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { useForm } from '../../../hooks/useForm';
import { Button } from '../../Button/Button';
import { Form, FormOptions } from '../Form.Styled';

export const LoginForm = ({ onSubmit, closeModal }) => {
  const { values, handleChange, isSubmitting, setIsSubmitting } = useForm();
  const { email, password } = values;

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    await onSubmit(email, password);

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
        fieldName={'password'}
        value={password}
        placeholder={'Enter your password'}
        type={'password'}
      />

      <FormOptions>
        <Button
          type={'submit'}
          text={'Log in'}
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

LoginForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
