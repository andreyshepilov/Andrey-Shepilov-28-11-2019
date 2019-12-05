import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

function SelectContainer({ inputChange, children }) {
  return <div onKeyUp={inputChange}>{children}</div>;
}

AutocompleteUnit.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSelectOption: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  defaultValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

function AutocompleteUnit({
  isLoading,
  options,
  onInputChange,
  onSelectOption,
  name,
  isDisabled,
  defaultValue,
  placeholder,
}) {
  return (
    <SelectContainer inputChange={onInputChange}>
      <Select
        className='basic-single'
        classNamePrefix='select'
        defaultValue={defaultValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={true}
        isSearchable={true}
        name={name}
        options={options}
        onChange={onSelectOption}
        placeholder={placeholder}
      />
    </SelectContainer>
  );
}

export default AutocompleteUnit;
