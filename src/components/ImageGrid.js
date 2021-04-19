import React from 'react'
import useFirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion';
export default function ImageGrid({ setselectedImage }) {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (
        <div className='img-grid'>
            {docs && docs.map(doc => {
                return <motion.div
                    whileHover={{ opacity: 1 }}
                    layout
                    onClick={() => {
                        setselectedImage(doc.url);
                    }}
                    className='img-wrap' key={doc.id}>
                    <motion.img src={doc.url} alt={doc.url}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    ></motion.img>
                </motion.div>
            })}
        </div>
    )
}
