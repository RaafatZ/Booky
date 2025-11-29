import styles from "./ButtonAtom.module.scss";

export default function ButtonAtom({ children }) {
  return (
    <>
      <button className={styles.Button}>{children}</button>
    </>
  );
}
