import { storage } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const uploadToStorage = async (data, path, callback = null) => {
    try {
        const storageRef = ref(storage, `/${path}/${data?.name}`);
        const url = await uploadBytesResumable(storageRef, data).then(
            (snapshot) => {
                return getDownloadURL(snapshot.ref);
            }
        );
        if (!url) throw Error("No url received!");
        if (callback) {
            callback(url);
            return;
        }
        return url;
    } catch (error) {
        console.log("Upload error: ", error);
    }
};

export default uploadToStorage;
