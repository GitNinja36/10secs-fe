import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import "./UserAuth.css";

interface Props {
    handleSubmit: () => void;
}

function UserAuth({ handleSubmit }: Props): JSX.Element {
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [referralCode, setReferralCode] = useState<string>("");

    // Validate phone number input
    const onPhoneNumberChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setPhoneNumber(value); // Update phone number as the user types
    };

    // Validate referral code input
    const onReferralCodeChanged = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        const isValid = /^\s*$|^[a-zA-Z0-9]{6}$/.test(value); // Regular expression for 6 alphanumeric characters or empty string

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
        // Validate phone number on form submission
        if (!phoneNumber) {
            toast.error("Phone number is required!", {
                position: "top-right",
            });
            return;
        }

        if (!/^\d{10}$/.test(phoneNumber)) {
            toast.error("Phone number must be exactly 10 digits!", {
                position: "top-right",
            });
            return;
        }

        handleSubmit();
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