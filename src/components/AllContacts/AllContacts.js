import React from "react";
import SingleContact from "../SingleContact/SingleContact";
import PropTypes from "prop-types";
import styles from "./AllContacts.module.css";

const AllContacts = ({ contacts, filter, deleteContact }) => {
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filterContacts.map(({ name, number, id }) => (
        <SingleContact
          key={id}
          name={name}
          number={number}
          id={id}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

AllContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default AllContacts;
