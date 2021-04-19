import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import '../index.css'
const UploadForm = () => {
    const [error, seterror] = useState(null);
    const [file, setfile] = useState(null);
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected) {
            setfile(selected);
            seterror(null);
        }
        else {
            setfile(null);
            seterror('Please select a valid file');
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} accept="image/png, image/jpeg" />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setfile={setfile} />}
            </div>
        </form>
    )
}
export default UploadForm;