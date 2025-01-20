import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./OTPVerifcation.css";

function OTPVerification() {
    const [otp, setOTP] = useState("");
    const [otpError, setOTPError] = useState("");
    const navigate = useNavigate();

    const onVerify = () => {
        if (otp !== "1234") {
            setOTPError("Invalid OTP!");
            toast.error("Invalid OTP!");
            return;
        }
        toast.success("OTP Verified Successfully!");
        navigate("/game"); // Navigate to the Game page
    };

    return (
        <div className="container grid">
            <header className="navbar">
                <h2 className="navbar_title">Verify OTP</h2>
            </header>
            <div className="otp-body">
                <div className="otpEntry">
                    <div className="otp_input">
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            className="otpEntry_input"
                            value={otp}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setOTP(event.target.value)}
                        />
                    </div>
                    <button className="btn otp_btn" onClick={onVerify}>
                        Verify
                    </button>
                </div>
                {otpError && <p className="alert alert-error">{otpError}</p>}
            </div>
            <ToastContainer />
        </div>
    );
}

export default OTPVerification;