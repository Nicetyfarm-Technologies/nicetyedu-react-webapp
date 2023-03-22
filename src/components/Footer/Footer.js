import React from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const menu = <FontAwesomeIcon icon={faBars} />
const close = <FontAwesomeIcon icon={faTimes} />

function Footer() {
	
	return (
		<nav className="footer">
			
		</nav>
	);
}

export default Footer;
