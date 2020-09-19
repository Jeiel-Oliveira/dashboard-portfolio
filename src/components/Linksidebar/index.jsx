import React from 'react';
import propTypes from 'prop-types'
import FontIcon from 'components/fontAwesomeIcon/index ';

import { Link } from "react-router-dom";

import './style.scss';

export default function Linksidebar({ name, item, path, icon }) {

  return (
    <div className="flex flex-align-center">

      <FontIcon style={{ color: "white" }} name={icon} />
      <li key={item} className="link-sidebar pl-2">
        <Link to={path}>{name}</Link>
      </li>

    </div>
  )
}

Linksidebar.propTypes = {
  name: propTypes.string,
  item: propTypes.number,
  path: propTypes.string
}