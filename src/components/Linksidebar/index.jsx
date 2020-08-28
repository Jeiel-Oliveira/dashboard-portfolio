import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';

export default function Linksidebar({ name, key, path }) {

  return (
    <li key={key} className="link-sidebar">
      <Link to={path}>{name}</Link>
    </li>
  )
}