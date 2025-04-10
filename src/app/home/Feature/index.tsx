"use client";
import Image from "next/image";
import UnderText from "@/components/shares/UnderText";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Feature = () => {
  return (
    <div className={clsx([styles.featureBlock, "common-layout"])}>
      <div className="container">
        <div className="feature-content">
          <div className="column-50">
            <h2 className="common-sub-title">
              Thành lập doanh nghiệp <UnderText text="tự động" /> chỉ trong 30
              phút
            </h2>
            <div className="common-description">
              Nền tảng đầu tiên tại Việt Nam áp dụng công nghệ Trí tuệ nhân tạo
              (AI) để hỗ trợ thành lập doanh nghiệp
            </div>
          </div>
          <div className="column-50">
            <div className="top-block">
              <div className="number-block">
                <span className="number">15+</span>
                <span className="text">Số năm kinh nghiệm</span>
              </div>
              <div className="number-block">
                <span className="number">20N+</span>
                <span className="text">Khách hàng hài lòng</span>
              </div>
            </div>

            <div className="bottom-block">
              <Button variant="text" className="text-black">
                <span>Tìm hiểu thêm</span>
                <ArrowRight size={24} color="#2F1110" />
              </Button>
            </div>
          </div>
        </div>

        <div className="feature-image">
          <Image
            src="/images/home/home-2.png"
            alt="feature-image"
            width={810}
            height={501}
            className="common-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
