import React from "react";
import PropTypes from "prop-types";
import styles from "./SingleContact.module.css";

const SingleContact = ({ name, number, id, deleteContact }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.contactText}>
        {name}: {number}
      </p>
      <button
        className={styles.contactButton}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

SingleContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default SingleContact;
