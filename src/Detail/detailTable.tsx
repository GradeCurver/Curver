import styles from "styles/Detail.module.css";
import { DetailRowProp } from "./detailSection";
import { GradeChip } from "../Misc/chips";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export const DetailRow = (props: DetailRowProp) => {

    const deleteFunction = () => {
        props.delete(props.index)
    }

    return (
        <div className={styles.tableRow}>
            <hr style={{ color: "var(--card-stroke-color)", opacity: 0.3 }} />
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div className={styles.detailRow}>
                    <GradeChip text={props.finalGrade} hex={props.chipColor} />
                    <div style={{ marginInline: "1rem" }}>{props.score}/{props.maxScore}</div>
                </div>
                <button onClick={deleteFunction}>
                    <CancelOutlinedIcon></CancelOutlinedIcon>
                </button>
                
            </div>
        </div>
    )
}