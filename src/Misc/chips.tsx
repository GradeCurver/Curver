import styles from "styles/Misc.module.css";

export interface ChipData {
  text: string;
  hex: string;
}

export enum ChipColors {
  DarkGreen = "#16B364",
  LightGreen = "#66C61C",
  Yellow = "#EAAA08",
  Orange = "#EF6820",
  Red = "#F04438",
}

export const GradeChip = (props: ChipData) => {
  return (
    <div
      className={styles.gradeChip}
      style={{ color: props.hex, backgroundColor: `${props.hex}20` }}
    >
      {props.text}
    </div>
  );
};
