import "./uploadCSV.style.scss";
// component
import Button from "../../Component/button";
// img
import Certificate from "../../assets/images/uploadPage/cert.svg";
//import CSVSample from "../../assets/images/uploadPage/CSVSample.svg";
import CSVSample from "../../assets/images/CSV-sample.png";
import UploadVector from "../../assets/images/uploadPage/uploadVector.svg";
import Template1 from "../../assets/images/uploadPage/template1.svg";
import Template2 from "../../assets/images/uploadPage/template2.svg";
import Template3 from "../../assets/images/uploadPage/template3.svg";
import { useState, useEffect } from "react";

import useAppProvider from "../../hooks/useAppProvider";
import axios from "../../api/axios";

const UploadCSV = () => {
  const [state, setState] = useState({ active: true });
  const { file, setFile, setCsvData } = useAppProvider();
  // const postFile = usePostCsvFile()

  const toggleState = e => {
    console.log(Object.values(e.target.classList));
    // console.log( typeof e.target.classList);
    const active = Object.values(e.target.classList).find(
      element => element === "active"
    );
    //   .forEach(element => {
    if (!active) {
      // console.log(3);
      setState(prev => {
        return { ...prev, active: !prev.active };
      });
    }
  };

  let formData = new FormData();

  const onFileChange = (e) => {
    console.log(e.target.files[0])

    if(e.target && e.target.files[0]){
      formData.append('file', e.target.files[0])
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/upload/csv", formData);
      console.log(res);
      setCsvData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="uploadCSVContainer">
      <div className="certificateSwitch"></div>
      <h1>Your certificate is almost ready!</h1>
      <div className="certificatePreview">
        <img src={Certificate} alt="certificate preview" />
      </div>
      <h2>Upload your csv file here in the format below</h2>
      <div className="CSVSample">
        <img src={CSVSample} alt="CSV sample" />
      </div>

      <div
        className="dragBox"
        //   onDragEnter={handleDrag}
        //   onDragLeave={handleDrag}
        //   onDragOver={handleDrag}
        //   onDrop={handleDrop}
      >
        <i>
          <img src={UploadVector} alt="upload icon" />
        </i>
        <span>
          Drag and drop your CSV file here
          <br /> or
          <label htmlFor="uploadCSV" className="fileUpload CSVupload">
            <input
              type="file"
              id="uploadCSV"
              name="uploadCSV"
              accept=".csv"
              className="box"
              onChange={onFileChange}
            />
            Browse files
          </label>
        </span>
      </div>
      {/* <button className='btn btnLight'>Generate Certificate</button> */}
      <button onClick={handleUpload}>Upload</button>
      <div>
        <h2>Even More Template for You</h2>
        <div className="moreTemplate">
          <img src={Template1} alt="Template1" />
          <img src={Template2} alt="Template2" />
          <img src={Template3} alt="Template3" />
        </div>
        <Button className="btn btnLight" style={{ margin: "1em auto" }}>
          Explore More Template
        </Button>
      </div>
    </div>
  );
};

export default UploadCSV;
