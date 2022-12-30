import styles from "/styles/Home.module.css";

interface DisplayProps {
    formData: {
        score: number;
        maxScore: number;
    };
}


export const ThirdCard: React.FC<DisplayProps> = (props) => {

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1>Grade Output</h1>
            </div>
            <hr />
            <p>Score: {props.formData.score}</p>
            <p>Max Score: {props.formData.maxScore}</p>
            <div className={styles.bigText}>{curveGrade(props.formData.score, props.formData.maxScore)}%</div>
        </div>
    )
};

function curveGrade(score: number, maxScore: number): string {
    var curved: number

    if (score > maxScore) {
        score = maxScore
    }

    // console.log(score)

    curved = ((score / maxScore)*100)
    return ( curved.toFixed(2) )
}