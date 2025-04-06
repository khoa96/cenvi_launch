import styles from "./styles.module.scss";

interface UnderTextProps {
  text: string;
}

const UnderText = ({ text }: UnderTextProps) => {
  return (
    <span className={styles.underlineContainer}>
      <span className={styles.text}>{text}</span>
    </span>
  );
};

export default UnderText;
