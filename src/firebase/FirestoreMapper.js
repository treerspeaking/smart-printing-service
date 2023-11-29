import {collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, FieldValue } from "firebase/firestore";
import { db } from "./Firebase";

export class FirestoreMapper {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  // Function to fetch user data from Firestore
  async getDocument(documentID) {
    const docRef = doc(db, this.collectionName, documentID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  }

  async getAllDocuments() {
    const collectionRef = collection(db, this.collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => doc.data());
    return documents;
  }

  async getAllDocumentsInSubcollection(idPath) {
    const collectionRef = collection(db, ...idPath);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map(doc => doc.data());
    return documents;
  }

  async updateDocument(id, newData) {
    const docRef = doc(db, this.collectionName, id);
    await updateDoc(docRef, newData);
  }

  async createOrOverwriteDocument(id, newData) {
    const docRef = doc(db, this.collectionName, id);
    await setDoc(docRef, newData);
  }

  async createDocumentInNestedSubcollection(idPath, newData) {
    const path = idPath.join('/'); // Joins the elements of the array into a string with the '/' character
    const printingLogCollection = collection(db, path);
    console.log("printingLogCollection", printingLogCollection);

    const printingLogDoc = doc(printingLogCollection);
    console.log("printingLogDoc", printingLogDoc);

    const printingLogId = printingLogDoc.id; // Generates a unique ID
    console.log("printingLogId", printingLogId);
    
    const docRef = doc(db, ...idPath, printingLogId);
    console.log("docRef", docRef);

    await setDoc(docRef, newData);
  }

  async removeField(id, field) {
    const docRef = doc(db, this.collectionName, id);
    await updateDoc(docRef, { [field]: FieldValue.delete() });
  }

  async removeDocument(id) {
    const docRef = doc(db, this.collectionName, id);
    await deleteDoc(docRef);
  }

}