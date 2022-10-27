import PropTypes from 'prop-types';
import s from './Filter.module.css';
function Filter({ value, onChangeFilter }) {
  return (
    <label className={s.label_form}>
      Find contacts by name
      <input
        className={s.input_form}
        type="text"
        value={onChangeFilter}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
