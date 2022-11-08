import styles from '../../styles/components/Container.module.css';

export default function Container({ title, children }) {
  return (
    <section className={styles.container}>
      <h1 className={styles.containerTitle}>{title}</h1>
      {children}
    </section>
  );
}
