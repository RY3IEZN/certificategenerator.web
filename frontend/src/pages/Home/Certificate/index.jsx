import React, { useState } from "react";
import "./certificate.style.scss";
import { Link, useNavigate } from "react-router-dom";
import UploadCSV from "../../UploadCSV";
import Button from "../../../Component/button";
import Input from "../../../Component/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Certificate ({
  logo,
  setLogo,
  certificateTitle,
  setCertificateTitle,
  awardeeName,
  setAwardeeName,
  message,
  setMessage,
  issuedBy,
  setIssuedBy,
  issueDate,
  setIssueDate
}) {
    const [bulkCertificate, setBulkCertificate] = useState(false);
    const [date, setDate ] = useState(Date.now())
    const navigate = useNavigate()
    const disabledButton = !logo.trim() || !message.trim() || !certificateTitle.trim() || !awardeeName.trim() || !issuedBy.trim() || !issueDate
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate('/preview')
    }
    const handleDate = (date) => {
      setDate(date)
      setIssueDate(formatDate(date));
    }
    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
    function formatDate(date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('/');
    }

  return (
    <>
      <p id="certificatee" className="sora header">
        Create your <span className="emphasized">certificate </span>
        with <span className="emphasized">ease</span>
      </p>

      <p style={{ padding: "10px" }} className="prompt">
        Select a template, input values and Create a Certificate right away.
      </p>

      {bulkCertificate ? (
        <div className="flex justify-between mode">
          <button
            className="select"
            style={{
              color: "#222222",
              backgroundColor: "#ffffff",
              transition: "300ms ease-in"
            }}
            onClick={() => {
              setBulkCertificate(false);
            }}
          >
            Single <span className="mobile-none">Certificate</span>
          </button>
          <button
            className="select"
            onClick={() => {
              setBulkCertificate(true);
            }}
          >
            Bulk <span className="mobile-none">Certificate</span>
          </button>
        </div>
      ) : (
        <div className="flex justify-between mode">
          <button
            className="select"
            onClick={() => {
              setBulkCertificate(false);
            }}
          >
            Single <span className="mobile-none">Certificate</span>
          </button>
          <button
            className="select"
            style={{
              color: "#222222",
              backgroundColor: "#ffffff",
              transition: "300ms ease-in"
            }}
            onClick={() => {
              setBulkCertificate(true);
            }}
          >
            Bulk <span className="mobile-none">Certificate</span>
          </button>
        </div>
      )}

      {bulkCertificate ? (
        <div>
          <form action="" className="cert-form text-left work-sans">
            <UploadCSV />
            {/* <label for='img'>Logo</label>
            <input type="file" name="uploadfile" id="img" style={{ display:"none"}}/>
            <label for="img" className="upload">Upload logo</label>
            <p style={{fontSize: '12px', margin: '0'}}>Max image upload size: 8mb</p>
            <label for='text' className="label">Certificate Title</label>
            <input type="text" placeholder="Certificate of completion"/>
        
            <label for='text' className="label">Dedication or message</label>
            <input type="text" placeholder="For your exceptional performance this month, 
            in appreciation for your loyalty and the desire to fulfil our goals, 
            in recognition of your leadership and dedication "/>
            <label for='text' className="label">Issued by</label>
            <input type="text" placeholder="Name of organisation or issuer"/>
            <label for='date' className="label">Issue Date</label>
            <input type="date" />
            <input type="submit" value="Create Certificate" className="submit-btn"/> */}
          </form>
        </div>
      ) : (
        <div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="cert-form text-left work-sans"
          >
            <label for="img">Upload logo</label>
            <input
              type="file"
              name="uploadfile"
              id="img"
              onChange={e => setLogo(URL.createObjectURL(e.target.files[0]))}
            />

            <img style={{ width: "15%" }} src={logo} alt="logo" />
            <p style={{ fontSize: "12px", margin: "0" }}>
              Max image upload size: 8mb
            </p>

            <label htmlFor="text" className="label">
              Certificate Title
            </label>
            <input
              label={"Certificate Title"}
              type="text"
              placeholder="Certificate of completion"
              value={certificateTitle}
              onChange={e => setCertificateTitle(e.target.value)}
            />

            <label htmlFor="text" className="label">
              Awardee Name
            </label>
            <input
              label={"Awardee Name"}
              type="text"
              placeholder="Gabriel Prosper"
              value={awardeeName}
              onChange={e => setAwardeeName(e.target.value)}
            />

            <label htmlFor="text" className="label">
              Dedication or message
            </label>
            <input
              label={"Dedication or message"}
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="For your exceptional performance this month, 
                in appreciation for your loyalty and the desire to fulfil our goals, 
                in recognition of your leadership and dedication"
            />

            <label htmlFor="text" className="label">
             Issued By
            </label>
            <input
              label={"Dedication or message"}
              type="text"
              placeholder="Name of organisation or issuer"
              value={issuedBy}
              onChange={e => setIssuedBy(e.target.value)}
            />
            
            <label htmlFor='' className="label">Issue Date</label>
            <DatePicker selected={date} onChange={handleDate} dateFormat="dd/MM/yyyy" />           
           
            <button disabled={disabledButton} className={`${disabledButton && 'btn-disabled'} btn-success`}>Create Certificate</button>
          </form>
        </div>
      )}
    </>
  );
}
