import React, { useLayoutEffect, useState } from 'react';
import propTypes from 'prop-types'
import FontIcon from 'components/fontAwesomeIcon';

import { Link, useLocation } from "react-router-dom";

export default function Linksidebar({ name, item, path, icon }) {

  const [ activeItem, setActiveItem ] = useState()

  const location = useLocation();

  useLayoutEffect(() => {

    function checkHistory() {
      if(location.pathname === path) setActiveItem("active-link-sidebar")
      else setActiveItem("")
    }

    checkHistory()
  }, [location, path])

  return (
    <div className={`flex flex-align-center pl-2 ${activeItem}`}>

      <FontIcon color="white" name={icon} />
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