import styles from "../../styles/components/contact/ContactUrl.module.css";

export default function ContactUrl ({ url, children }) {
    return (
        <div className={styles.contactUrl} onClick={() => {
            window.open(url, "_blank");
        }}>
            {children}
        </div>
    )
}