import React, { useState } from "react";
import "./Register.css";


function Register() {

  const [schoolName, setSchoolName] = useState("");
  const [schoolLevel, setSchoolLevel] = useState("Secondary");
  const [schoolType, setSchoolType] = useState("Private School");
  const [Province, setSchoolProvince] = useState("Southern");
  const [District, setSchoolDistrict] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolPhone, setschoolPhone] = useState("");
  const [adminName, setAdminName] = useState("");
  const [numClass, setNumClass] = useState("");
  const [recom, setRecom] = useState("Tv");
  const [packName, setPackage] = useState("Platinum");
  const [promoCode, setPromoCode] = useState("");
  
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="register-intro">
          <h2>Welcome To Nicety<span>Edu</span></h2>
          <p> We are excited seeing you join this super Education Technology. Kindly fill in the form below for the onboading process to begin</p>
        </div>
        <form className="registering-form"></form>
      </div>
    </div>
  );
}

export default Register;
