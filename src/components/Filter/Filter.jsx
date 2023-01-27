import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChangeFilter} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
