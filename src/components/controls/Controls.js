import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions }) => (
  <section className={styles.Controls}>
    {actions.map(({ name, text, count, actionCreator }) => (
      <button key={name} onClick={actionCreator}>
        {text || name} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    text: PropTypes.string
  })).isRequired
};

export default Controls;

