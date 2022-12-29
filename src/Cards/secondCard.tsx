import styles from "../../styles/Home.module.css";
import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
}

interface FormProps {
    onChange: (data: FormData) => void;
  }

export const SecondCard: React.FC<FormProps> = (props) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
      });
    
    //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData({
    //       ...formData,
    //       [event.target.name]: event.target.value,
    //     });
    //     props.onChange(formData);
    //   };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
        props.onChange({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1>Raw Grade</h1>
            </div>
            <hr />

            <form>
                <input name="name" onChange={handleChange} />
                <input name="email" onChange={handleChange} />
            </form>
        </div>
    )
};