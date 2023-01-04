import styles from "styles/Home.module.css";
import { ChipColors, ChipData, GradeChip } from "../Misc/chips";

export const FirstCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Curve Function</h2>
        <select name="curveFunction" id="curveFunction">
          <option value="squareRoot">Square Root</option>
          <option value="none1">Place Holder</option>
        </select>
      </div>
      <hr />
      <GradeRow startNumber={81} endNumber={100} chip={ChipItems[0]} />
      <GradeRow startNumber={64} endNumber={81} chip={ChipItems[1]} />
      <GradeRow startNumber={49} endNumber={64} chip={ChipItems[2]} />
      <GradeRow startNumber={36} endNumber={49} chip={ChipItems[3]} />
      <GradeRow startNumber={25} endNumber={36} chip={ChipItems[4]} />
      <GradeRow startNumber={0} endNumber={25} chip={ChipItems[5]} />
    </div>
  );
};

const ChipItems: Array<ChipData> = [
  { text: "90-100%", hex: ChipColors.DarkGreen },
  { text: "80-90%", hex: ChipColors.LightGreen },
  { text: "70-80%", hex: ChipColors.Yellow },
  { text: "60-70%", hex: ChipColors.Orange },
  { text: "50-60%", hex: ChipColors.Red },
  { text: "<50%", hex: ChipColors.Red },
];

interface GradeRowProps {
  startNumber: number;
  endNumber: number;
  chip: ChipData;
}

const GradeRow = ({ startNumber, endNumber, chip }: GradeRowProps) => {
  return (
    <div className={styles.cardGradeRow}>
      <div style={{ fontSize: 24 }}>
        {startNumber}-{endNumber}%
      </div>
      <GradeChip text={chip.text} hex={chip.hex} />
    </div>
  );
};
