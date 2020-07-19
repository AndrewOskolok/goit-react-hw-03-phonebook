import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterContacts.module.css";

const FilterContacts = ({ inputFilter }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.inputName}>Find contacts by name:</p>
      <input
        type="text"
        placeholder="Enter name"
        onChange={inputFilter}
      ></input>
    </div>
  );
};

FilterContacts.propTypes = {
  inputFilter: PropTypes.func.isRequired,
};

export default FilterContacts;
