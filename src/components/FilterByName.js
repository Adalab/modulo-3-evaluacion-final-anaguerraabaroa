import React from "react";
import PropTypes from "prop-types";

const FilterByName = (props) => {
  // event handler
  const handleFilter = (ev) => {
    const data = {
      name: ev.currentTarget.name,
      value: ev.currentTarget.value,
    };
    props.handleFilter(data);
  };

  return (
    <>
      <i className="form__icon fab fa-reddit-alien"></i>
      <label className="form__label" htmlFor="formText">
        Enter your favourite character
      </label>
      <input
        className="form__input--text"
        type="text"
        name="text"
        value={props.filterName}
        placeholder="ej: Rick"
        id="formText"
        onChange={handleFilter}
      />
    </>
  );
};

// control data
FilterByName.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default FilterByName;
