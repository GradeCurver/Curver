import styles from "/styles/Home.module.css";
import React, { useState } from 'react';

interface FormData {
  score: number;
  maxScore: number;
}
interface FormProps {
  onChange: (data: FormData) => void;
}

// The Form component is a functional component that takes in props of type FormProps
export const SecondCard: React.FC<FormProps> = (props) => {
  const [formData, setFormData] = useState<FormData>({
    score: 0,
    maxScore: 0,
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Create a copy of the current form data
    const updatedFormData = {
      ...formData,
      // Update the value of the field that was changed
      [event.target.name]: event.target.valueAsNumber,
    };

    // Check if the score is greater than the input
    // If it is, set the score equal to the input to prevent scores greater than 100%
    if (event.target.name === "score" && updatedFormData.score > updatedFormData.maxScore) {
      updatedFormData.score = updatedFormData.maxScore;
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

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h1>Raw Grade</h1>
      </div>
      <hr />

      <form>
        <input name="score" type="number" max={9999} maxLength={4} onChange={handleChange} onInput={handleInput} />
        <input name="maxScore" type="number" max={9999} maxLength={4} onChange={handleChange} onInput={handleInput} />
      </form>
    </div>
  )
};