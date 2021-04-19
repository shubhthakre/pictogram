import { useState, useEffect } from "react";
import { storageBucket, firestore, timestamp } from "../firebase/config";
const useStorage = (file) => {
    const [progress, setprogress] = useState(0);
    const [url, seturl] = useState(null);
    const [error, seterror] = useState(null);
    useEffect(() => {
        //Ref
        const storageRef = storageBucket.ref(file.name);
        const firestoreRef = firestore.collection('images');
        storageRef.put(file).on('state-changed', (snap) => {
            let percentage = (snap.bytesTransferred) / (snap.totalBytes) * 100;
            setprogress(percentage);
        }, (err) => {
            seterror(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            firestoreRef.add({ url, createdAt });
            seturl(url);

        })
    }, [file])

    return { progress, url, error };
}
export default useStorage;