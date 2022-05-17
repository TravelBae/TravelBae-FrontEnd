import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.scoped.css';

// Fungsi ini untuk membuat komponen Breadcrumbs
// parameter yang ada didalamnya merupakan props yang bisa diturunkan kedalam komponen ini
export default function Breadcrumbs({ className, items }) {
  const classes = [styles.root, className].filter(Boolean).join(' ');

  return (
    <nav className="root">
      {items.reduce((acc, curr, idx) => {
        if ((idx + 1) === items.length) {
          return [
            ...acc,
            idx ? (<Fragment key={`s${idx}`}>&nbsp;</Fragment>) : '',
            <p key={idx}>{curr.name}</p>];
        }
        return [
          ...acc,
          <Link key={idx} to={curr.url}>{curr.name}&nbsp;</Link>,
          <Fragment key={`s${idx}`}>&nbsp;/&nbsp;</Fragment>
        ];
      }, [])}
    </nav>
  );
}

Breadcrumbs.defaultProps = {
  className: '',
  items: [],
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })),
};
