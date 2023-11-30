

import React, { useState, useContext, useEffect } from "react"; // Import useState from react
import { studentMapper } from "./mapper/StudentMapper";
import { getAuth } from "firebase/auth";

const PrintingLogContext = React.createContext();

export const usePrintingLog = () => {
	return useContext(PrintingLogContext);
}

export function PrintingLogProvider({ children }) {
	const auth = getAuth();
	const [printingLogData, setPrintingLogData] = useState(null); // State to store the user data from Firestore

    // Function to fetch user data from Firestore
    const fetchData = async (uid) => {
		const studentDoc = await studentMapper.getAllPrintingLogsByStudentID(uid);
		setPrintingLogData(studentDoc);
    };

	useEffect(() => {
		const unsubscriber = auth.onAuthStateChanged((user) => {
			if (user) {
                fetchData(user.uid);
            }
		})
		return unsubscriber;
	}, []) 

	
	return (
		<PrintingLogContext.Provider value={printingLogData}>
			{children}
		</PrintingLogContext.Provider>
	);
}