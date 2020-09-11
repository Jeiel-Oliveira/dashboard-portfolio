import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';

export default function Linksidebar({ name, item, path }) {

  return (
    <li key={item} className="link-sidebar">
      <Link to={path}>{name}</Link>
    </li>
  )
}