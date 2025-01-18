import { useState, useEffect } from 'react';

interface Props {
    totalTime: number;
    onTimeOver: () => void;
}

function Timer({ totalTime, onTimeOver }: Props) {
    const [timeLeft, setTimeLeft] = useState(totalTime);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            onTimeOver();
        }
    }, [timeLeft]);

    return (
        <div className="badge badge-info">
            Time Left: {" " + timeLeft}
        </div>
    )
}

export default Timer;