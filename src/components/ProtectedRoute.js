import React, { useEffect, useRef, useState } from 'react';
import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from 'react-router-dom';

// Navigate;
const ProtectedRoute = () => {
	const [authenticated, setAuthenticated] = useState(true);
	const [user, setUser] = useState(null)

	// useEffect(() => {
	// 	const checkUser = () => {
	// 		const auth = getAuth();
	// 	  const user1 = auth.currentUser;
	// 	setUser(user1);
		  
	// 	  if (user) {
	// 		setAuthenticated(true)
	// 		console.log(user.email);
	// 		console.log(authenticated);
	// 	  } else {
	// 		setAuthenticated(false)
	// 		// console.log(authenticated);
	// 	  }}
	// 	  checkUser();
	// }, []);

	return authenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
