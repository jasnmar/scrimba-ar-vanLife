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

async function getVans(hostId="") {
  let q
  let snapshot
  if(hostId) {
    q = query(vansCollectionRef, where("hostId", "==", hostId) )
    snapshot = await getDocs(q)
  } else {
    snapshot =  await getDocs(vansCollectionRef)
  }
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)
  return {
    ...snapshot.data(),
    id: snapshot.id
  } 
}

async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123") )
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans

}


// async function getData(url) {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch data",
//       statusText: res.statusText,
//       status: res.status
//     }
//   }
//   const data = await res.json();
//   return await data;
// }

async function loginUser(creds) {
  const res = await fetch("/api/login", {method: "post", body: JSON.stringify(creds)})
  const data = await res.json()
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}


export { loginUser, getVans, getVan, getHostVans }