import "./uploadCSV.style.scss";
// component
import Button from "../../Component/button";
// img
import Certificate from "../../assets/images/uploadPage/cert.svg";
import CSVSample from "../../assets/images/uploadPage/CSVSample.svg";
import UploadVector from "../../assets/images/uploadPage/uploadVector.svg";
import Template1 from "../../assets/images/uploadPage/template1.svg";
import Template2 from "../../assets/images/uploadPage/template2.svg";
import Template3 from "../../assets/images/uploadPage/template3.svg";
import { useState } from "react";

const UploadCSV = () => {
  const [state, setState] = useState({ active: true });

  const toggleState = (e) => {
    console.log(Object.values(e.target.classList));
    // console.log( typeof e.target.classList);
    const active = Object.values(e.target.classList).find(
      (element) => element === "active"
    );
    //   .forEach(element => {
    if (!active) {
      // console.log(3);
      setState((prev) => {
        return { ...prev, active: !prev.active };
      });
    }
  };
  return (
    <div className="uploadCSVContainer">
      <div className="certificateSwitch">
        <button
          className={!state.active ? "active switchBtn" : "switchBtn"}
          onClick={toggleState}
        >
          {" "}
          Single Certificate
        </button>
        <button
          className={state.active ? "active switchBtn" : "switchBtn"}
          onClick={toggleState}
        >
          {" "}
          Bulk
        </button>
      </div>
      <h1>Your certificate is almost ready!</h1>
      <div className="certificatePreview">
        <img src={Certificate} alt="certificate preview" />
      </div>
      <Button name={"Modify Certificate"} className={"modiftyCertificate"} />

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
            />
            Browse files
          </label>
        </span>
      </div>
      {/* <button className='btn btnLight'>Generate Certificate</button> */}

      <div>
        <h2>Even More Template for You</h2>
        <div className="moreTemplate">
          <img src={Template1} alt="Template1" />
          <img src={Template2} alt="Template2" />
          <img src={Template3} alt="Template3" />
        </div>
        <button className="btn btnLight">Explore More Template</button>
      </div>
    </div>
  );
};

export default UploadCSV;
