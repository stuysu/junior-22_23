import styles from "../../styles/components/Collection.module.css";

export default function Collection({title, children}) {
    return (
        <div className={styles.collectionContainer}>
            <div className={styles.collectionTitle}>
                {title}
            </div>
            <div className={styles.gridContainer}>
                {children}
            </div>
        </div>
    )
}
