import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FaHome, FaPhoneAlt, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";

// LOCAL IMPORTS
import AppButton from "../reusable/AppButton";
import PageTitle from "../reusable/PageTitle";
import { styles as contactStyles, useStyles } from "./Styles";
import SuccessModal from "../reusable/SuccessModal";

const sendEmail = async (data) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URI + "/api/mailer",
      data
    );
    
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const ContactMe = ({ mediaQueries }) => {
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState(true);
  const styles = contactStyles(mediaQueries);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const { fullname, email, phone_number, subject, message } = formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendEmail({
        fullname,
        email,
        phone_number,
        subject,
        message
      });
      setStatus(response);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        margin: "auto"
      }}
    >
      <SuccessModal
        status={status}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <PageTitle title={"Contact Me"} titleStyles={styles.titleStyles} />
      <p style={styles.intro}>Let's take your business to the next level.</p>
      <div style={styles.body}>
        <div style={styles.right}>
          <header className={classes.header}>Address</header>
          <div style={styles.contactInfo}>
            <p>
              <FaHome size={24} color="var(--primaryColor)" />
              &nbsp;&nbsp;Federal University of Technology,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minna Niger State.
            </p>
            <p>
              <FaPhoneAlt size={24} color="var(--primaryColor)" />
              &nbsp;&nbsp;09029242729
            </p>
            <p>
              <FaWhatsappSquare size={24} color="var(--primaryColor)" />
              &nbsp;&nbsp;09029242729
            </p>
            <p>
              <MdEmail size={24} color="var(--primaryColor)" />
              &nbsp;&nbsp;adebiyiartworld@gmail.com
            </p>
          </div>
        </div>
        <form style={styles.right} onSubmit={handleSubmit}>
          <header className={classes.header}>Message</header>
          <div className={classes.formField}>
            <TextField
              type="text"
              name="fullname"
              size="small"
              label="Full Name"
              required
              fullWidth
              variant="outlined"
              focused
              placeholder="Enter your full name"
              onChange={handleOnChange}
            />
          </div>
          <div className={classes.formField}>
            <TextField
              type="email"
              name="email"
              size="small"
              label="Email"
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div className={classes.formField}>
            <TextField
              type="text"
              name="phone_number"
              size="small"
              label="Phone Number"
              required
              fullWidth
              variant="outlined"
              placeholder="Enter your phone number"
              onChange={handleOnChange}
            />
          </div>
          <div className={classes.formField}>
            <TextField
              type="text"
              name="subject"
              size="small"
              label="Subject"
              required
              fullWidth
              variant="outlined"
              placeholder="Enter subject"
              onChange={handleOnChange}
            />
          </div>
          <div className={classes.formField}>
            <TextField
              type="text"
              name="message"
              size="small"
              label="Message"
              required
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              placeholder="Enter your message"
              onChange={handleOnChange}
            />
          </div>
          <AppButton
            text={"Submit"}
            type="submit"
            customStyles={{ ...styles.buttonStyles, width: "100%" }}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
