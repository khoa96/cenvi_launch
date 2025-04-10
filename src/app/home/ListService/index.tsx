// Nếu file này không sử dụng state/effect, không cần "use client".
// Chỉ cần "use client" khi bạn thao tác trên client (VD: setState, sự kiện,...).
import ServiceItem from "./ServiceItem";
import styles from "./styles.module.scss";

// Tạo mảng dữ liệu dịch vụ minh hoạ
const servicesData = [
  {
    icon: "/icons/bank.svg",
    title: "Dịch vụ vay vốn",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa purus elementum ante eget arcu rhoncus eu.",
  },
  {
    icon: "/icons/tax.svg",
    title: "Dịch vụ kế toán thuế",
    description: "Nunc nulla tempus v elit consequat.",
  },
  {
    icon: "/icons/finance.svg",
    title: "Dịch vụ tài chính",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa purus elementum.",
  },
  {
    icon: "/icons/marketing.svg",
    title: "Dịch vụ marketing",
    description: "Nunc nulla tempus v elit consequat.",
  },
  {
    icon: "/icons/web.svg",
    title: "Thiết kế & xây dựng website",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/logo.svg",
    title: "Thiết kế logo",
    description: "Nunc nulla tempus v elit consequat.",
  },
  {
    icon: "/icons/doc.svg",
    title: "Biểu mẫu",
    description: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    icon: "/icons/other.svg",
    title: "Dịch vụ khác",
    description: "Massa purus elementum ante eget arcu.",
  },
];

export default function ListService() {
  return (
    <section className={styles.listServiceSection}>
      <div className={styles.container}>
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
