

import { auth , googleProvider } from "../firebase/Firebase"; // Import auth from your firebase config
import {createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword} from "firebase/auth"
import React, { useState, useContext } from "react"; // Import useState from react


AuthContext = React.createContext();


export const AuthProvider = () => {

	const [currentUser, setUser] = useState(null);

	const value = {
		currentUser,
		signIn,
		signInWithGoogle,
		logout,
		login
	};

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

	const login = (email, password) => {
		try {
			const userCredential = signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
		}
		catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged((user) => {
				setUser(user);
		})
		return unsubscriber;
	}, []) 

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
}