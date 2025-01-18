import './Rules.css';

interface Props {
    title: string;
    rules: string[];
    onBack: () => void;
    onNext: () => void;
}

function Rules({ title, rules, onBack, onNext }: Props) {
    return (
        <div className="container">
            <header className="navbar">
                <h1 className="navbar_title">{title}</h1>
            </header>
            <div className="rules_container">
                <div className="rules__card">
                    <div className="card rules_card">
                        <ul className="rules_list">
                        {rules.map((rule, idx) => (
                            <li key={idx} className="rules_item">- {rule}</li>
                        ))}
                        </ul>
                    </div>
                    <div className="rules_buttons">
                    <button className="btn rules_btn" onClick={onBack}>
                        Back
                    </button>
                    <button className="btn rules_btn" onClick={onNext}>
                        Next
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rules;