import "./App.css";
import PhoneOTPLogin from "./components/phone-login";
import { generateOTPMain } from "./logic/otp";
function App() {
  generateOTPMain();
  return (
    <>
      <div className="app">
        <h1>Login using Phone</h1>
        <PhoneOTPLogin />
      </div>
    </>
  );
}

export default App;
