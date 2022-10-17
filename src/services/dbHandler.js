import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    serverTimestamp,
    updateDoc
} from "firebase/firestore";
import { db } from "../firebase/config";

const dbHandler = async (data, collectionType = "", type = "GET") => {
    try {
        if (!collectionType) throw Error("Collection name is not provided");
        let collectionRef = collection(db, collectionType);
        let docRef = doc(db, collectionType, data?.id);
        switch (type) {
            case "GET": {
                let resData;
                let data = await getDoc(
                    data?.singleDoc ? docRef : collectionRef
                );
                if (Array.isArray(data))
                    data.forEach((doc) => {
                        resData.push({ id: doc?.id, ...doc.data() });
                    });
                else {
                    resData = data.data();
                }
                return resData;
            }
            case "POST": {
                await addDoc(collectionRef, {
                    ...data,
                    timestamp: serverTimestamp()
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
                await updateDoc(docRef, {
                    ...data,
                    timestamp: serverTimestamp()
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
