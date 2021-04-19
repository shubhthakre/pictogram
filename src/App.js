import React, { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import Modal from './components/Modal'
import Page from './components/Page';
function App() {
    const [selectedImage, setselectedImage] = useState(null)
    return (
        <div className="App">
        <Page/>
            <Title />
            <UploadForm />
            <ImageGrid setselectedImage={setselectedImage} />
            {selectedImage && <Modal selectedImage={selectedImage} setselectedImage={setselectedImage} />}
        </div>
    );
}

export default App;