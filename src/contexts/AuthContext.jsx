

import { auth , googleProvider } from "../firebase/Firebase"; // Import auth from your firebase config
import {createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword} from "firebase/auth"
import React, { useState, useContext, useEffect } from "react"; // Import useState from react


const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {

	const [currentUser, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const signIn = async (email, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
		} catch (error) {
			console.log(error);
		}
	};

	const signInWithGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, googleProvider);
			const user = userCredential.user;
		} catch (error) {
			console.log(error);
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};

	const login = async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
		}
		catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged((user) => {
			setLoading(false);
			setUser(user);
		})
		return unsubscriber;
	}, []) 

	const value = {
		currentUser,
		signIn,
		signInWithGoogle,
		logout,
		login
	};
	
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}