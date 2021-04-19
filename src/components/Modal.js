import React from 'react'
import { motion } from 'framer-motion';
export default function Modal({ selectedImage, setselectedImage }) {
    const closeModal = (e) => {
        if (e.target.classList.contains('backdrop'))
            setselectedImage(null);

    }
    return (
        <motion.div className='backdrop'
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img src={selectedImage} alt="Enlarged"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />

        </motion.div>
    )
}
