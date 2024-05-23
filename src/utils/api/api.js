// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBu1XfkLUwZRNNCz_K7mE92Ea1dJZDayq4",
  authDomain: "vanlife-50e86.firebaseapp.com",
  projectId: "vanlife-50e86",
  storageBucket: "vanlife-50e86.appspot.com",
  messagingSenderId: "1068336464531",
  appId: "1:1068336464531:web:d80153f2ff1b1fb2e9c366"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")
const userCollectionRef = collection(db, "users")

async function getVans(hostId="") {
  let q //Query if there is a hostId
  let snapshot
  if(hostId) {
    q = query(vansCollectionRef, where("hostId", "==", hostId) )
  } 
  if(!q) {
    q = vansCollectionRef
  }
  try {
    snapshot = await getDocs(q)
  } catch(err) {
    throw {
      message: "Error getting van data",
      errorText: err
    }
  }
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

async function getVan(id) {
  const docRef = doc(db, "vans", id)
  let snapshot
  try {
    snapshot = await getDoc(docRef)
  } catch(err) {
    throw {
      message: "Error get data for van " + id,
      errorText: err
    }
  }
  return {
    ...snapshot.data(),
    id: snapshot.id
  } 
}


async function loginUser(creds) {
  const q = query(userCollectionRef, where("email", "==", creds.email) )
  let snapshot
  try {
    snapshot = await getDocs(q)
  } catch(err) {
    throw {
      message: "Error getting user data",
      errorText: err
    }
  }
  const user = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))

  if(creds.password === user[0].password) {
    return user[0]
  }
  return null

}

export { loginUser, getVans, getVan }