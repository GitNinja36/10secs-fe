import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "./UserAuth.css";

function UserAuth(): JSX.Element {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [referralCode, setReferralCode] = useState<string>("");

    const navigate = useNavigate(); // Initialize navigation

    // Validate phone number input
    const onPhoneNumberChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        setPhoneNumber(event.target.value);
    };

    // Validate referral code input
    const onReferralCodeChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        const isValid = /^\s*$|^[a-zA-Z0-9]{6}$/.test(value);

        if (isValid) {
            setReferralCode(value);
        } else {
            setReferralCode(value);
            toast.error("Invalid referral code! It should be 6 characters long and alphanumeric.", {
                position: "top-right",
            });
        }
    };

    // Handle submit
    const onSubmit = (): void => {
        if (!phoneNumber) {
            toast.error("Phone number is required!", { position: "top-right" });
            return;
        }

        if (!/^\d{10}$/.test(phoneNumber)) {
            toast.error("Phone number must be exactly 10 digits!", { position: "top-right" });
            return;
        }

        // Navigate to the OTP verification page after validation
        navigate("/otp-verification", { state: { phoneNumber, referralCode } });
    };

    return (
        <div className="container grid">
        <header className="navbar">
            <h2 className="navbar_title">Login or Sign Up</h2>
        </header>
        <div className="auth_container">
                <div className="authEntry">
                    <div className="auth_input">
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className="authEntry_input"
                        value={phoneNumber}
                        onChange={onPhoneNumberChanged}
                    />
                    <input
                        type="text"
                        placeholder="Referral Code (optional)"
                        className="authEntry_input"
                        value={referralCode}
                        onChange={onReferralCodeChanged}
                    />
                    </div>
                    <button className="btn authEntry_btn" onClick={onSubmit}>
                        Submit
                    </button>
                </div>
        </div>
        <ToastContainer />
        </div>
    );
}

export default UserAuth;