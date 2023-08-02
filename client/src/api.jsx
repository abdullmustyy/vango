import { initializeApp } from "firebase/app";
// TODO: import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD0wnJP_6mKwq41gN8GFVOj5hIuQdgRMjA",
  authDomain: "vango-12aaf.firebaseapp.com",
  projectId: "vango-12aaf",
  storageBucket: "vango-12aaf.appspot.com",
  messagingSenderId: "644481206377",
  appId: "1:644481206377:web:7afad7bd094356a016faf8",
  measurementId: "G-H9MWS87TY1",
};

const app = initializeApp(firebaseConfig);
// TODO: const analytics = getAnalytics(app);
const db = getFirestore(app);
const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  const processedData = data.map((data) => {
    const buttonStyle =
      data.type === "simple"
        ? "bg-[#E17654] text-white hover:outline hover:outline-2 hover:outline-[#E17654]"
        : data.type === "luxury"
        ? "bg-[#161616] text-white hover:outline hover:outline-2 hover:outline-[#161616]"
        : "bg-[#115E59] text-white hover:outline hover:outline-2 hover:outline-[#115E59]";
    return {
      ...data,
      buttonStyle: buttonStyle,
      type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
    };
  });

  return processedData;
}

export async function getVanDetail(vanId) {
  const vanRef = doc(db, "vans", vanId);
  const vanShot = await getDoc(vanRef);
  let data = vanShot.data();

  data = {
    ...data,
    typeBg:
      data.type === "simple"
        ? "[#E17654]"
        : data.type === "luxury"
        ? "[#161616]"
        : "[#115E59]",
    type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
  };

  return data;
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
}

export async function getHostVanDetail(vanId) {
  const hostVanRef = doc(db, "vans", vanId);
  const hostVanShot = await getDoc(hostVanRef);
  let data = hostVanShot.data();

  data = {
    ...data,
    typeBg:
      data.type === "simple"
        ? "[#E17654]"
        : data.type === "luxury"
        ? "[#161616]"
        : "[#115E59]",
    type: data.type.charAt(0).toUpperCase() + data.type.slice(1),
  };

  return data;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
