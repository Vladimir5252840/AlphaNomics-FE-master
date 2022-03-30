/**
 *
 * Date: Fri Dec 13 2019
 * Title: Loader
 *
 */
// Packages
import React from "react";
import { Spin } from "antd";
import PropTypes from 'prop-types';

const Loader = ({ message, extraClass = '' }) => (
  <div className={`loading-container ${extraClass}`}>
    <Spin tip={message} />
  </div>
);

Loader.propTypes = {
  message: PropTypes.string
};

Loader.defaultProps = {
  message: 'Loading...'
}

export default Loader;
