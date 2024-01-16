import twilio from "twilio";
const accountSid = "ACba36e4aefcdcc2c058b52832dba9a7a2";
const authToken = "615669b32fe97b4728c42542fcf697c8";
const client = new twilio(accountSid, authToken);

export const generateOTPMain = () => {
  // Function to generate a random 6-digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Function to send OTP via SMS
  const sendOTPviaSMS = async (phoneNumber, otp) => {
    try {
      const message = await client.messages.create({
        body: `Your OTP is: ${otp}`,
        from: "your_twilio_phone_number",
        to: phoneNumber,
      });
      console.log("OTP sent successfully:", message.sid);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  // Example usage
  const phoneNumber = "+918698437788"; // Replace with the recipient's phone number
  const generatedOTP = generateOTP();

  sendOTPviaSMS(phoneNumber, generatedOTP);
};
