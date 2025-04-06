import styles from "./styles.module.scss";

interface UnderTextProps {
  text: string;
  size: number;
}

const UnderText = ({ text, size }: UnderTextProps) => {
  return (
    <div className={styles.underlineContainer}>
      <span className={styles.text} style={{ fontSize: size }}>
        {text}
      </span>
    </div>
  );
};

export default UnderText;
