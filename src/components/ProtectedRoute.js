import React, { useEffect, useRef, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

Navigate;
const ProtectedRoute = () => {
	const [authenticated, setAuthenticated] = useState(true);
	useEffect(() => {
		// const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
		// 	setAuthenticated(!!user);
		// });
		// return unsubscribe;
	}, []);

	return authenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
