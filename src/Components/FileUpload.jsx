import React from "react";
import {useRef} from 'react';

const FileUploader = (onFileSelect) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        onFileSelect(e.target.files[0])
    }

    return (
        <div className="file-uploader">
            <input type="file" onChange={(e) => {onFileSelect(e.target.files[0])}} name="myFile" id="filename" />
            <input type="file" value={ image } onChange={(e) => setImage(e.target.files[0])} name="myFile" id="filename" placeholder="Upload Image" />

            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>

        </div>
    );
}
 
export default FileUploader;