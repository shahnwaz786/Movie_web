// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyAt1XGrxk8UDcTNu2toJxQOMSRIccEUdmw",
  authDomain: "netflix-clone-4f5ae.firebaseapp.com",
  projectId: "netflix-clone-4f5ae",
  storageBucket: "netflix-clone-4f5ae.appspot.com",
  messagingSenderId: "687827507478",
  appId: "1:687827507478:web:add908cfad3212d5f19837"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=> {
    try{
        const res= await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user;
    await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    });
    
    }catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const login = async(email,password) => {
try{
await signInWithEmailAndPassword(auth,email,password)
}catch(error)
{
console.log(error);
toast.error(error.code.split('/')[1].split('-').join(" "));
}
}

const logOut = () => {
    signOut(auth);
}

export {auth ,db,login,signup, logOut};