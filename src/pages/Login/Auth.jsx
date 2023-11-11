
import { auth , googleProvider } from "../../firebase/Firebase"; // Import auth from your firebase config
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { useState } from "react"; // Import useState from react

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
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

	const signOut = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.log(error);
		}
	};


  	return (
    	<div className="App">
      	<input 
        	placeholder="Email..." 
        	onChange={(e) => setEmail(e.target.value)}
        />
      	<input 
	  		placeholder="Password..."
			onChange={(e) => setPassword(e.target.value)}
			type="password"
		/>
      
	  
	  	<button onClick={signIn}>Sign In</button>
		
	  	<button onClick={signInWithGoogle}>Sign In With Google</button>
		
	  	<button onClick={signOut}>Sign Out</button>
    	</div>
  );
}