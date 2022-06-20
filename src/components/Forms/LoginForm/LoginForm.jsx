import PropTypes from 'prop-types';
import { Field } from '../Field/Field';
import { useForm } from '../../hooks/useForm';
import { Button } from '../../Button/Button';
import { Form } from '../Form.Styled';

export const LoginForm = ({ onSubmit }) => {
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

      <Button
        type={'submit'}
        text={'Log in'}
        onClick={handleSubmit}
        isDisabled={isSubmitting}
      />
    </Form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
