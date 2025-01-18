import Rules from './Rules';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

function AboutTiebreaker({ onBack, onNext }: Props) {
    const rules = [
        "Leaderboard rankings are determined based on users' total points, with higher points earning a higher rank.",
        "In case of a tie in points, the user with the lower average response time will be ranked higher.",
        "If both users have the same average response time, the one who has used fewer lifelines will be ranked higher.",
        "If lifeline usage is also the same, the user with fewer wrong answers will take the higher rank.",
        "If the tie still persists, the ranking will be decided randomly."
    ]

    return (
        <Rules title="Tiebreaker" rules={rules} onBack={onBack} onNext={onNext} />
    );
};

export default AboutTiebreaker;