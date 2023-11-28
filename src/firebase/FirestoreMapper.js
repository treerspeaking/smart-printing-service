import { doc, getDoc, setDoc, updateDoc, deleteDoc, FieldValue } from "firebase/firestore";

class FirestoreMapper {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  // Function to fetch user data from Firestore
  async fetchData(id) {
    const docRef = doc(db, this.collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("No such document!");
    }
  }

  async updateDocument(id, newData) {
    const docRef = doc(db, this.collectionName, id);
    await updateDoc(docRef, newData);
  }

  async createOrOverwriteDocument(id, newData) {
    const docRef = doc(db, this.collectionName, id);
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