import styles from "styles/Detail.module.css";
import { DetailRow } from "./detailTable";

export interface DetailRowProp {
    chipColor: string;
    finalGrade: string;
    score: string;
    maxScore: string;
}

interface DetailProps {
    items: DetailRowProp[];
}

export const DetailSection = (props: DetailProps) => {
    return (
        <div style={{ margin: "3rem 8rem" }}>
            <div className={styles.detailHeader}>
                <h2>Previously Entered Grades</h2>
                <select name="curveFunction" id="curveFunction">
                    <option value="table">Table View</option>
                    <option value="graph">Graph View</option>
                </select>
            </div>
            <div>
                {props.items.map(item => (
                    <DetailRow chipColor={item.chipColor} finalGrade={item.finalGrade} score={item.score} maxScore={item.maxScore} />
                ))}
            </div>
        </div>
    )
};