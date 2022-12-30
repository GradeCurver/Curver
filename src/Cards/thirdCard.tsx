import styles from "/styles/Home.module.css";
import { FormData } from "./secondCard";

interface DisplayProps {
    formData: FormData;
}

export const ThirdCard: React.FC<DisplayProps> = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1>Grade Output</h1>
            </div>
            <hr />
            <div className={styles.bigText}>{curveGrade({ score: props.formData.score, maxScore: props.formData.maxScore })}%</div>
        </div>
    )
};

// Math operation to return curved score
function curveGrade({ score, maxScore }: { score: number; maxScore: number; }): string {
    var curved: number

    curved = (Math.sqrt(score / maxScore) * 100)
    return (curved.toFixed(2))
}