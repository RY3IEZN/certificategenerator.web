import React, { useState } from "react";
import Button from "../../Component/button";
import Inputfield from "../../Component/inputField";
import axios from "axios";
import Swal from "sweetalert2";

const ApplicationModal = ({ position, openApplyModal, setOpenApplyModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const role = position.role;
  const jobType = position.type;
  const location = position.location;
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://certgo.hng.tech/api/applycareers", {
        email,
        name,
        role,
        location,
        jobType
      });

      setOpenApplyModal(!ApplicationModal);
      Toast.fire({
        icon: "success",
        title: "registration successfull"
      });
    } catch (err) {
      Toast.fire({
        icon: "error",
        title: "Something wen wrong, please try again"
      });
    }
  }
  return (
    <>
      {openApplyModal && (
        <div className="applyModal">
          <div className="applyModal__container">
            <div className="applyModal__text">
              <h4 className="job__title">
                Role: <span>{position.role}</span>
              </h4>
              <h4 className="job__type">
                Job type: <span>{position.type}</span>
              </h4>
              <h5 className="job__location">
                Location: <span>{position.location}</span>
              </h5>
              {/* <p className="job__description">
                Job description: {position.desc}
              </p> */}
            </div>

            <form className="applyModal__form" onSubmit={handleSubmit}>
              <p>Enter details: </p>
              <Inputfield
                type="text"
                label="Full Name"
                onChange={e => setName(e.target.value)}
                placeholder="Full name"
                required
              />
              <Inputfield
                type="email"
                label="Email Address"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
                required
              />
              <Button>Apply</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationModal;
