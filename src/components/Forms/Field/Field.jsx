import PropTypes from 'prop-types';
import { Input, FieldName, Label } from './Field.styled';

export const Field = ({ type, value, onChange, fieldName, placeholder }) => {
  return (
    <Label>
      <FieldName>{fieldName}</FieldName>
      <Input
        name={fieldName}
        type={type}
        id={fieldName}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Label>
  );
};

Field.propTypes = {
  fieldName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
