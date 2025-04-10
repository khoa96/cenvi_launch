"use client";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { ReactNode, use, useMemo } from "react";
import { Check } from "lucide-react";
import styles from "./styles.module.scss";

const SPLIT_FEATURE_NUMBER = 3;

interface PriceItemProps {
  title: string;
  subTitle: string;
  icon: ReactNode;
  isActive?: boolean;
  isPopular?: boolean;
  features: string[];
  buttonText?: string;
}

const PriceItem: React.FC<PriceItemProps> = ({
  title,
  subTitle,
  isActive = false,
  isPopular = false,
  features,
  buttonText = "Bắt đầu",
  icon,
}) => {
  const isShowDash = useMemo(() => {
    return features.length > SPLIT_FEATURE_NUMBER;
  }, [features]);

  if (!features.length) return null;
  return (
    <div
      className={clsx(
        styles.card,
        isActive && styles.active,
        isPopular && styles.popular
      )}
    >
      {isPopular ? <div className={styles.label}>Phổ biến nhất</div> : null}

      {icon ? icon : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subTitle}>{subTitle}</p>

      <ul className={styles.features}>
        {features.slice(0, SPLIT_FEATURE_NUMBER).map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <Check color="#12B76A" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {isShowDash && <hr className={styles.divider} />}
      <ul className={styles.features}>
        {features.slice(SPLIT_FEATURE_NUMBER).map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <Check color="#12B76A" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className={styles.cardFooter}>
        {isPopular ? (
          <Button
            className="bg-primary text-primary-foreground w-full"
            size="md"
          >
            Bắt đầu
          </Button>
        ) : (
          <Button
            variant="outline"
            size="md"
            className="bg-white text-[hsl(var(--text-primary))] border border-border w-full"
          >
            Bắt đầu
          </Button>
        )}
      </div>
    </div>
  );
};

export default PriceItem;
