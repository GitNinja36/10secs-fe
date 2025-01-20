import Rules from './Rules';
import { useNavigate } from 'react-router-dom';

function AboutLifelines() {
    const navigate = useNavigate();
    const rules = [
        "Each user starts with two lifelines.",
        "50:50: Removes two incorrect options from the choices.",
        "2x: Doubles your points if you select the correct answer.",
        "Each lifeline can only be used once per game.",
        "Earn additional lifelines by referring friends to the game.",
        "Visit the 'Referral' section in the menu to find and share your referral code."
    ]

    const handleBack = () => {
        navigate('/about-game'); 
    };

    const handleNext = () => {
        navigate('/user-auth');
    };

    return (
        <Rules title="Lifelines" 
        rules={rules}
        onBack={handleBack}
        onNext={handleNext}
    />
    );
};

export default AboutLifelines;