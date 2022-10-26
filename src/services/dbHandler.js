import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    serverTimestamp,
    setDoc,
    updateDoc
} from "firebase/firestore";
import { db } from "../firebase/config";

export const dbHelper = (id, collectionType) => ({
    docRef: doc(db, collectionType, id)
});

const dbHandler = async (data, collectionType = "", type = "GET") => {
    try {
        if (!collectionType) throw Error("Collection name is not provided");
        let collectionRef = collection(db, collectionType);
        let docRef = data?.singleDoc ? doc(db, collectionType, data?.id) : null;
        switch (type) {
            case "GET": {
                let resData;
                let res = data?.singleDoc
                    ? await getDoc(docRef)
                    : await getDocs(collectionRef);

                if (res?.docs) {
                    resData = res.docs;
                } else if (Array.isArray(res))
                    res.forEach((doc) => {
                        resData.push({ id: doc?.id, ...doc.data() });
                    });
                else if (res?.data) {
                    resData = res.data();
                } else resData = [];
                return resData;
            }
            case "POST": {
                let payload = { ...data };
                delete payload?.id;
                delete payload?.singleDoc;
                payload.timestamp = serverTimestamp();
                if (data?.id) await setDoc(docRef, payload);
                else await addDoc(collectionRef, payload);

                return { status: "Success" };
            }
            case "DELETE": {
                await deleteDoc(docRef);
                return { status: "Success" };
            }
            case "PUT": {
                let uploadData = { ...data };
                delete uploadData?.singleDoc;
                delete uploadData?.id;
                await updateDoc(docRef, {
                    ...uploadData,
                    timestamp: serverTimestamp()
                });
                return { status: "Success" };
            }
            default:
                return { data: null };
        }
    } catch (error) {
        console.log("Update error! ", error, data, collectionType);
        return { error };
    }
};

export default dbHandler;
