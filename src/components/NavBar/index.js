import React, { useState } from 'react';
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


const menu = <FontAwesomeIcon icon={faBars} />
const close = <FontAwesomeIcon icon={faTimes} />

function NavBar() {
	const navRef = useRef();
	const navRef2 = useRef();
	const navRef3 = useRef();
	const navRef4 = useRef();

	const showNavContent = () => {
		navRef.current.classList.toggle('responsive');
		navRef2.current.classList.toggle('responsive');
		navRef3.current.classList.toggle('none');
		navRef4.current.classList.toggle('block');
	}

	return (
		<nav className="nav">
			<div className="main-nav" ref={navRef4}>
				<div>
					<div className="">
						<NavLink to="/" activestyle="true">
							<h2 className="logo">NICETY<span>EDU</span></h2>
						</NavLink>
						
					</div>
				</div>
				<div>
					<button className="humburger btn" onClick={showNavContent} ref={navRef3}>
						{menu}
					</button>
					<div ref={navRef}
						className="primary-nav"
					>
						<ul className="pages-nav" ref={navRef2}>
							<button className="close btn" onClick={showNavContent}>
							{close}
							</button>
							<li className="">
								<NavLink to="/" activestyle="true">Home</NavLink>
							</li>
							<li className="">
								<NavLink to="/about" activestyle="true">About</NavLink>
							</li>
							<li className="">
								<NavLink to="/services" activestyle="true">Product</NavLink>
							</li>
							<li className="">
								<NavLink to="/testmonials" activestyle="true">Testmonials</NavLink>
							</li>
							<NavLink to="/contact" activestyle="true">
								<li className="">Contact</li>
							</NavLink>
						</ul>
						<div className="">
							<NavLink
								to="/signin"
								activestyle="true"
								className="login-btn"
							>
								Sign in
							</NavLink>
							
						</div>

					</div>
				</div>
				
			</div>
		</nav>
	);
}

export default NavBar;
