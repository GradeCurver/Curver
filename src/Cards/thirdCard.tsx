import styles from "/styles/Home.module.css";
import { FormData } from "./secondCard";

interface DisplayProps {
    formData: FormData;
}

export const ThirdCard: React.FC<DisplayProps> = (props) => {

    const curve = curveGrade({ score: parseInt(props.formData.score, 10), maxScore: props.formData.maxScore })

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1>Grade Output</h1>
            </div>
            <hr />
            {curve !== "NaN" ? (
                <div className={styles.bigText}>
                    <div>{curve}</div>
                    <div style={{opacity: 0.5}}>%</div>
                </div>
            ) : (
                <div className={styles.bigText}>N/A</div>
            )}
        </div>
    )
};

// Math operation to return curved score
function curveGrade({ score, maxScore }: { score: number; maxScore: number; }): string {
    var curved: number

    curved = (Math.sqrt(score / maxScore) * 100)
    return (curved.toFixed(2))
}
