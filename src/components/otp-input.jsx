/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const OTPInput = ({ length, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(" "));

  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return;
    }

    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    const combineOtp = newOtp.join("");

    if (combineOtp.length === length) onOtpSubmit(combineOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = () => {};

  const handleKeyDown = () => {};

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div>
      {otp.map((otp, index) => {
        return (
          <input
            key={index}
            type="text"
            ref={(input) => (inputRefs.current[index] = input)}
            value={otp}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OTPInput;
