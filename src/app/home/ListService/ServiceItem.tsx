// Nếu component này không dùng state hoặc effect, bạn có thể để server component.
// Nếu cần dùng hook (useState, useEffect...), hãy thêm "use client" ở đầu file.
import Image from "next/image";
import styles from "./styles.module.scss";

type ServiceItemProps = {
  icon: string; // Đường dẫn icon (có thể là /icons/bank.svg)
  title: string; // Tiêu đề dịch vụ
  description: string; // Mô tả ngắn
};

export default function ServiceItem({
  icon,
  title,
  description,
}: ServiceItemProps) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.iconWrapper}>
        {/* 
          Dùng Image của Next.js. Nếu icon là SVG có thể dùng <Image src={icon} ... /> 
          hoặc <img> thường tuỳ nhu cầu. 
        */}
        <Image src={icon} alt={title} width={48} height={48} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
