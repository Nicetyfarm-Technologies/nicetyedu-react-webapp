import React, { useEffect, useRef, useState } from 'react';
import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from 'react-router-dom';

Navigate;
const ProtectedRoute = () => {
	const [authenticated, setAuthenticated] = useState(true);

	useEffect(() => {
		// const checkUser = () => {
		// 	const auth = getAuth();
		//   const user = auth.currentUser;
		  
		//   if (user) {
		// 	setAuthenticated(true)
		//   } else {
		// 	setAuthenticated(false)
		//   }}
		//   checkUser();
	}, []);

	return authenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
