import "./Lifelines.css";
interface Props {
    handleFiftyFifty: () => void;
    handleTwoX: () => void;
    fiftyFiftyLeft: number;
    twoXLeft: number;
}

function Lifelines({ handleFiftyFifty, handleTwoX, fiftyFiftyLeft, twoXLeft }: Props) {
    return (
        <span>
            <div className="lifeline_conatiner">
                    {(fiftyFiftyLeft? <button className="btn Lifeline_btn Btn50-50" onClick={handleFiftyFifty} >50:50</button> : null)}

                    {(twoXLeft? <button className="btn Lifeline_btn Btn2x" onClick={handleTwoX} >2x</button> : null)}
            </div>
        </span>
    )
}

export default Lifelines;
