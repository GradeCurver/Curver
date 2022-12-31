import styles from "styles/Detail.module.css";
import { DetailRowProp } from "./detailSection";
import { GradeChip } from "../Misc/chips";

export const DetailRow = (props: DetailRowProp) => {
    return (
        <div>
            <hr style={{color: "var(--card-stroke-color)", opacity: 0.5}}/>
            <div className={styles.detailRow}>
                <GradeChip text={props.finalGrade} hex={props.chipColor} />
                <div style={{marginInline: "1rem"}}>{props.score}/{props.maxScore}</div>
            </div>
        </div>
    )
}