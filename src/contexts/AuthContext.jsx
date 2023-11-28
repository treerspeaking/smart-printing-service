

import { auth , googleProvider, db } from "../firebase/Firebase"; // Import auth from your firebase config
import {createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword} from "firebase/auth"
import React, { useState, useContext, useEffect } from "react"; // Import useState from react
import { doc, getDoc } from "firebase/firestore";
import { studentMapper } from "./mapper/StudentMapper";

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {

	const [currentUser, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const [userData, setUserData] = useState(null); // State to store the user data from Firestore

    // Function to fetch user data from Firestore
    const fetchUserData = async (uid) => {
		const studentDoc = await studentMapper.getStudentData(uid);
		console.log(studentDoc);
		setUserData(studentDoc);
    };

	const signIn = async (email, password) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
		} catch (error) {
			console.log(error);

			throw error;
		}
	};

	const signInWithGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, googleProvider);
			const user = userCredential.user;
		} catch (error) {
			console.log(error);
			
			throw error;
		}
	};

	const logout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
			
			throw error;
		}
	};

	const login = async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;
		}
		catch (error) {
			console.log(error);
			throw error;
		}
	};

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged((user) => {
			setLoading(false);
			setUser(user);

			if (user) {
                fetchUserData(user.uid);
            }
		})
		return unsubscriber;
	}, []) 

	const value = {
		currentUser,
		userData,
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