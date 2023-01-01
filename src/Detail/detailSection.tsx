import styles from "styles/Detail.module.css";
import { DetailRow } from "./detailTable";

export interface DetailRowProp {
    chipColor: string;
    finalGrade: string;
    score: string;
    maxScore: string;
    index: number;
    delete: (item: number) => void;
}

interface DetailProps {
    items: DetailRowProp[];
    clearSavedGrades: () => void;
    deleteGrade: (item: number) => void;
}

export const DetailSection = (props: DetailProps) => {

    return (
        <div style={{ margin: "3rem 8rem" }}>
            <div className={styles.detailHeader}>
                <h2>Previously Entered Grades</h2>
                <button onClick={props.clearSavedGrades}>Clear All</button>
            </div>
            <div>
                {props.items.map((item, index) => (
                    <DetailRow
                        key={index}
                        chipColor={item.chipColor}
                        finalGrade={item.finalGrade}
                        score={item.score}
                        maxScore={item.maxScore}
                        index={index}
                        delete={props.deleteGrade}
                    />
                ))}
            </div>
        </div>
    )
};