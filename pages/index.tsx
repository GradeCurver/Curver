import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FirstCard } from "../src/Cards/firstCard";
import { SecondCard, FormData } from "../src/Cards/secondCard";
import { ThirdCard } from "../src/Cards/thirdCard";
import {
  DetailItems,
  DetailRowProp,
  DetailSection,
} from "../src/Detail/detailSection";
import { ChipColors } from "../src/Misc/chips";
import { useState } from "react";
import { clear } from "console";

export interface AppState {
  formData: FormData;
}

export default function Home() {
  const [formData, setFormData] = useState<AppState["formData"]>({
    score: "",
    maxScore: 100,
  });

  const [savedGrades, setSavedGrades] = useState<DetailItems[]>([]);

  const handleChange = (data: AppState["formData"]) => {
    setFormData(data);
  };

  const handleAddNewGrade = (data: DetailItems) => {
    let item = savedGrades;
    item.unshift(data);
    setSavedGrades(item);
  };

  const clearSavedGrades = () => {
    if (window.confirm("Are you sure you want to clear the details?")) {
      // If the user clicks "OK", set the details array to an empty array
      setSavedGrades([]);
    }
  };

  function removeGrade(item: number) {
    console.log(`${item} Pressed`);
    let arr = [...savedGrades];
    arr.splice(item, 1);
    setSavedGrades(arr);
  }

  return (
    <>
      <Head>
        <title>Curver</title>
        <meta name="description" content="A simple calculator for curving test scores." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className={styles.hero}>
            <div>
              <div className={styles.title}>Curver</div>
              <div className={styles.subtitle}>
                By Ben Ostrovsky & Léo Mindlin{" "}
              </div>
            </div>
            <div style={{ display: "flex", width: "98vw" }}>
              <div className={styles.cardContainer}>
                <FirstCard />
                <SecondCard
                  onChange={handleChange}
                  setSavedGrades={handleAddNewGrade}
                />
                <ThirdCard formData={formData} />
              </div>
            </div>
            <div></div>
            <div></div>
          </div>

          <DetailSection
            items={savedGrades}
            clearSavedGrades={clearSavedGrades}
            deleteGrade={removeGrade}
          />
        </div>
      </main>
    </>
  );
}
