import styles from "../../styles/Home.module.css";

interface DisplayProps {
    formData: {
        name: string;
        email: string;
    };
}

export const ThirdCard: React.FC<DisplayProps> = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h1>Grade Output</h1>
            </div>
            <hr />
            <p>Name: {props.formData.name}</p>
            <p>Email: {props.formData.email}</p>
            <div className={styles.bigText}>81%</div>
        </div>
    )
};