import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../Breadcrumbs';
import styles from './styles.scoped.css';

export default function PageHead(props) {
  const { className, items } = props;
  const classes = [
    styles.root,
    className,
  ].filter(Boolean).join(' ');

  return (
    <header className="root">
      <Breadcrumbs items={items} />
    </header>
  );
}

PageHead.defaultProps = {
  className: '',
  items: [],
};

PageHead.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })),
};
