"use client";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import UnderText from "@/components/shares/UnderText";
import styles from "./styles.module.scss";

export default function ComparePrice() {
  return (
    <section className={clsx("common-layout", styles.comparePriceSection)}>
      <div className="container">
        {/* Khối hình ảnh hoặc bảng so sánh */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/home/home-3.png"
            alt="So sánh bảng giá"
            className={styles.image}
            width={576}
            height={720}
          />
        </div>
        {/* Khối nội dung (text, bullet points, button) */}
        <div className={styles.content}>
          <h2 className="common-sub-title">
            <UnderText text="So sánh" /> bảng giá với các công ty khác
          </h2>
          <ul className={styles.features}>
            <li>30-day free trial</li>
            <li>Personalized onboarding</li>
            <li>Access to all features</li>
          </ul>
          <Button className="bg-primary text-primary-foreground" size="md">
            Xem ngay
          </Button>
        </div>
      </div>
    </section>
  );
}
