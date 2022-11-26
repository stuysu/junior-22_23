import styles from "../../styles/components/Collection.module.css";

export default function Collection({ title, children }) {
	return (
		<div className={styles.collectionContainer}>
			<div className={styles.collectionTitle}>
				{title}
			</div>
			{
				styles.collectionTitle ? <div className={styles.titleUnderline} /> : ""
			}
			<div className={styles.gridContainerContainer}>
				<div className={styles.gridContainer}>
					{children}
				</div>
			</div>
		</div>
	)
}
