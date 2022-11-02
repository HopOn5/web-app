import { onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbHelper } from "../services/dbHandler";

const useFetchSnapshot = (id, collectionType) => {
    const [resData, setResData] = useState();

    useEffect(() => {
        const getData = () => {
            try {
                const initialCall = onSnapshot(
                    dbHelper(id, collectionType)?.docRef,
                    (doc) => setResData(doc?.data())
                );
                return () => initialCall();
            } catch (error) {
                console.log("error snapshot", error);
            }
        };
        if (id) getData();
    }, [id]);

    return { res: resData };
};

export default useFetchSnapshot;
