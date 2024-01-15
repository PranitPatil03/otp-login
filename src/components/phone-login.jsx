import { useState } from "react";
import "../../src/App.css";
import toast, { Toaster } from "react-hot-toast";
import OTPInput from "./otp-input";

const PhoneOTPLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;

    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      toast.error("Invalid Phone Number");
      return;
    }

    setShowOTPInput(true);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onOtpSubmit  = (otp) => {
    console.log("Login Successfully", otp);
  };

  return (
    <div>
      <Toaster />
      {!showOTPInput ? (
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter your Number"
            value={phoneNumber}
            className="ml"
            onChange={handlePhoneNumberChange}
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <div>
          <p>OTP Is Send to the Number : {phoneNumber}</p>
          <OTPInput length={4} onOtpSubmit ={onOtpSubmit }></OTPInput>
        </div>
      )}
    </div>
  );
};

export default PhoneOTPLogin;
