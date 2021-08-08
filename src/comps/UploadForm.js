import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () =>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);


    const handleChange =(e) =>{
        let selected = e.target.files[0];
        const types = ['image/jpeg', 'image/png']
        if(selected && types.includes(selected.type)){
            setFile(selected); 
            setError('');
        }
        else{
            setFile(null);
            setError("Please select a valid file type.(png or jpeg)");
        }
    }

    return(
        <form>
            <input type="file" accept="image/*" onChange={handleChange}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile = {setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;