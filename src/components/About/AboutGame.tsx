import Rules from './Rules';

interface Props {
    onBack: () => void;
    onNext: () => void;
}

function AboutGame({ onBack, onNext }: Props) {
    const rules = [
        "Stay updated on global and local news by playing our engaging quiz-style game.",
        "You'll have 10 seconds to read the question and choose your answer.",
        "The correct answer will be revealed either when the timer runs out or after you make your selection.",
        "Earn 3 points for every correct answer.",
        "Play as much as you like—there's no limit to the fun!",
        "The top 3 players with the highest points will win Amazon vouchers worth ₹1,000.",
        "Stay updated on winner announcements and upcoming contests by following our Instagram page @10secs.app"
    ]

    return (
        <Rules title="About the Game" rules={rules} onBack={onBack} onNext={onNext} />
    );
};

export default AboutGame;