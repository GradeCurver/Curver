import { DetailItems, DetailRowProp } from "../Detail/detailSection";
import { ChipColors } from "../Misc/chips";
import { curveGrade } from "./thirdCard";
import styles from "/styles/Home.module.css";
import React, { useState } from 'react';

export interface FormData {
  score: string;
  maxScore: number;
}

interface FormProps {
  onChange: (data: FormData) => void;
  setSavedGrades: (data: DetailItems) => void;
}

// The Form component is a functional component that takes in props of type FormProps
export const SecondCard: React.FC<FormProps> = (props) => {

  const defaultScore: string = ""
  const defaultMaxScore: number = 100

  const [actualScore, setActualScore] = useState("")

  const [formData, setFormData] = useState<FormData>({
    score: defaultScore,
    maxScore: defaultMaxScore,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non number inputs
    const value = event.target.value;
    const digitsOnly = value.replace(/[^\d]/g, "");
    event.target.value = digitsOnly;

    // Create a copy of the current form data
    const updatedFormData = {
      // Create a new copy of the object with updated values
      // Common JS operator for "object spreading"
      ...formData,
      // Update the value of the field that was changed
      [event.target.name]: parseInt(event.target.value, 10)
    };

    // Set the Actual Score
    if (event.target.name === "score") {
      if (String(updatedFormData.score) === "NaN" || updatedFormData.score === "Na") {
        setActualScore("")
      } else {
        setActualScore(updatedFormData.score)
      } 
    }

    /**
     * Check if the score is greater than the input
     * If it is, set the score equal to the input to prevent input scores greater than 100%
     * Also check if the maxScore has now become greater than the actualScore 
     * and if so reinstate the actualScore
     */
    const numberScore = parseInt(updatedFormData.score, 10)
    if (event.target.name === "score" && numberScore > updatedFormData.maxScore) {
      updatedFormData.score = String(updatedFormData.maxScore);
    } else if (event.target.name === "maxScore" && parseInt(actualScore, 10) < updatedFormData.maxScore) {
      updatedFormData.score = String(parseInt(actualScore, 10))
    } else if (event.target.name === "maxScore" && numberScore > updatedFormData.maxScore) {
      updatedFormData.score = String(updatedFormData.maxScore);
    }
    setFormData(updatedFormData);
    props.onChange(updatedFormData);
  };

  // Check to see if input is less than 5 digits
  // To prevent a super long number, messing up the layout
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 5) {
      event.target.value = event.target.value.slice(0, 5);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    // If the key that was pressed was the Enter key, reset the form data to its default values
    if (event.key === "Enter") {
      const numberScore = parseInt(formData.score, 10)
      if (String(numberScore) != "NaN") {
        
      const final = curveGrade({score: numberScore, maxScore: formData.maxScore})
      const finalNumber = parseInt(final, 10)
      let color = ChipColors.Red
      if (finalNumber > 90) {
        color = ChipColors.DarkGreen
      } else if (finalNumber > 80){
        color = ChipColors.LightGreen
      } else if (finalNumber > 70){
        color = ChipColors.Yellow
      } else if (finalNumber > 60){
        color = ChipColors.Orange
      }

      props.setSavedGrades({chipColor: color, finalGrade: `${final}%`, score: actualScore, maxScore: String(formData.maxScore)})
    }
      setFormData({
        score: "",
        maxScore: formData.maxScore,
      });
      // Trigger the onChange event with the updated form data
      props.onChange({
        score: "",
        maxScore: formData.maxScore,
      });
      setActualScore("")
    }
  };
    return (
      <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h1>Raw Grade</h1>
        <button className="tooltip" data-tooltip="This is the tooltip text">
      (Hover)
    </button>
      </div>
      <hr />
      <form onKeyDown={handleKeyDown}>
        <input name="score" value={actualScore} max={9999} maxLength={4} onChange={handleChange} onInput={handleInput} />
        <hr />
        <input name="maxScore" defaultValue={defaultMaxScore} max={9999} maxLength={4} onChange={handleChange} onInput={handleInput} />
      </form>
    </div>
  )
};

