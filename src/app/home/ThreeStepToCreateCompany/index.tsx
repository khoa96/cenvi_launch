"use client";
import Image from "next/image";
import UnderText from "@/components/shares/UnderText";

import styles from "./styles.module.scss";

const ThreeStepToCreateCompany = () => {
  return (
    <div className={styles.createCompanyBlock}>
      {/* khoi hien thi image */}
      <div className={styles.topBlock}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/home/home-4.png"
            alt="3 bước thành lập doanh nghiệp tại CENVI"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.imageContent}>
            <h2 className={styles.title}>
              <UnderText text="3 bước " /> thành lập doanh nghiệp tại{" "}
              <UnderText text="CENVI" />
            </h2>
          </div>
        </div>
      </div>

      {/* khoi hien thi 3 buoc */}

      <div className={styles.listStepWrapper}>aaa</div>
    </div>
  );
};

export default ThreeStepToCreateCompany;
