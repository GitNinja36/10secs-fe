import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "./OTPVerifcation.css";
interface Props {
    handleVerify: () => void;
}

function OTPVerification({ handleVerify }: Props) {
    const [otp, setOTP] = useState("");
    const [otpError, setOTPError] = useState("");

    const onVerify = () => {
        if (otp !== "1234") {
            setOTPError("Invalid OTP!");
            return;
        }
        handleVerify();
    }

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
                        onChange={(event: ChangeEvent<HTMLInputElement>) => setOTP(event?.target?.value)}
                    />
                </div>
                <button className="btn otp_btn" onClick={onVerify} >Verify</button>
            </div>
            {/* {otpError? <p className="alert alert-error">{otpError}</p> : null } */}
            </div>
        <ToastContainer />
        </div>
    )
}

export default OTPVerification;