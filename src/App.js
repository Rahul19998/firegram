import React,{useState} from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [setlectedImage,setSelectedImage] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage}/>
      <Modal setlectedImage={setlectedImage}/>
    </div>
  );
}

export default App;
