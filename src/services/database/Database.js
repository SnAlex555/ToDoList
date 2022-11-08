import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    collection,
    addDoc, 
    getDocs, 
    updateDoc,
    deleteDoc}
    from "firebase/firestore";
import { API_KEY } from "../../constants/endValues";

export class Database {
    constructor () {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "todolist-6041a.firebaseapp.com",
            projectId: "todolist-6041a",
            storageBucket: "todolist-6041a.appspot.com",
            messagingSenderId: "631453180114",
            appId: "1:631453180114:web:960744577d0f3fccea0d0b",
            measurementId: "G-V2JCH0Y4TD"
          };

          const app = initializeApp(firebaseConfig);
          this._database = getFirestore(app);     
    }

    create(collectionKey, body) {
        const collectionRef = collection(this._database, collectionKey);
        return addDoc(collectionRef, body)
    }

    read(collectionKey) {
        const collectionRef = collection(this._database, collectionKey);
        return getDocs(collectionRef).then((documents) => {
            return documents.docs.map((doc) => ({...doc.data(), id: doc.id}))
        });
    }

    update(collectionKey, id , body) {
        const document = doc(this._database, collectionKey, id);
        return updateDoc(document);
    }

    delete(collectionKey, id) {
        const document = doc(this._database, collectionKey, id);
        return deleteDoc(document);
    }

    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database ()
        }

        return Database.instance
    }
}