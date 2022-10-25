import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const dbHandler = async (data, collectionType = "", type = "GET") => {
  try {
    if (!collectionType) throw Error("Collection name is not provided");
    let collectionRef = collection(db, collectionType);
    let docRef = data?.singleDoc ? doc(db, collectionType, data?.id) : null;
    switch (type) {
      case "GET": {
        let resData;
        let res = await getDoc(data?.singleDoc ? docRef : collectionRef);
        if (Array.isArray(data))
          res.forEach((doc) => {
            resData.push({ id: doc?.id, ...doc.data() });
          });
        else {
          resData = res.data();
        }
        return resData;
      }
      case "POST": {
        let payload = { ...data };
        await addDoc(collectionRef, {
          ...data,
          timestamp: serverTimestamp(),
        });
        break;
      }
      case "DELETE": {
        await deleteDoc(docRef);
        return { data: "Success" };
      }
      case "PUT": {
        let uploadData = { ...data };
        delete uploadData?.singleDoc;
        delete uploadData?.id;
        console.log(uploadData);
        await updateDoc(docRef, {
          ...uploadData,
          timestamp: serverTimestamp(),
        });
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.log("Update error! ", error);
  }
};

export default dbHandler;
