import { useState, useEffect } from 'react'
import { firestore } from '../firebase/config'
const useFirestore = (collection) => {
    const [docs, setdocs] = useState([])
    useEffect(() => {
        const unsubscribe = firestore.collection(collection)
            .orderBy("createdAt", 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                })
                setdocs(documents);
            })
        return () => unsubscribe();
    }, [collection])
    return { docs };
}
export default useFirestore;