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

  const toggleState = e => {
    console.log(Object.values(e.target.classList));
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

  const onFileChange = e => {
    if (e.target && e.target.files[0]) {
      formData.append("file", e.target.files[0]);
    }
  };

  const handleUpload = async e => {
    console.log('i got here')
    e.preventDefault();
    try {
      const res = await axios.post("/upload/csv", formData);
      setCsvData(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article id="uploadCSVContainer">
      <h6>Upload your CSV file here in the format below</h6>
      <div>
        <div>
          <img src={UploadVector} alt="upload" />
        </div>
        <p>Drag and drop your CSV file here</p>
        <div>
          <span>or</span>
          <input
            type="file"
            id="files"
            className="file-upload"
            onChange={onFileChange}
          />
          <label htmlFor="files">Browse File</label>
        </div>
      </div>
      <section>
        <img src={CSVSample} alt="cert" />
      </section>
      <button onClick={(e) => handleUpload(e)}>Submit CSV</button>
    </article>
  );
};

export default UploadCSV;
