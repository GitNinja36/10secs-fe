import Rules from './Rules';
import { useNavigate } from 'react-router-dom';

function AboutTiebreaker() {
    const navigate = useNavigate();
    const rules = [
        "Leaderboard rankings are determined based on users' total points, with higher points earning a higher rank.",
        "In case of a tie in points, the user with the lower average response time will be ranked higher.",
        "If both users have the same average response time, the one who has used fewer lifelines will be ranked higher.",
        "If lifeline usage is also the same, the user with fewer wrong answers will take the higher rank.",
        "If the tie still persists, the ranking will be decided randomly."
    ]

    const handleBack = () => {
        navigate('/about-game'); 
    };

    const handleNext = () => {
        navigate('/user-auth');
    };

    return (
        <Rules title="Tiebreaker"
        rules={rules}
        onBack={handleBack}
        onNext={handleNext}/>
    );
};

export default AboutTiebreaker;