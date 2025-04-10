"use client";

import UnderText from "@/components/shares/UnderText";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Banner = () => {
  return (
    <div className={clsx([styles.bannerWrapper, "common-layout"])}>
      <div className="container">
        <div className="banner__content">
          <div className="column-50">
            <h1 className="common-title">
              Dễ dàng thành lập doanh nghiệp. <UnderText text="Miễn phí" /> và
              từ xa.
            </h1>
            <p className="common-description">
              Chúng tôi là công ty tư vấn, dịch vụ trọn gói, chuyên cung cấp các
              giải pháp thiết thực với giá cả cạnh tranh.
            </p>
            <div className="list-button">
              <Button className="bg-primary text-primary-foreground" size="xl">
                Bắt đầu ngay
              </Button>
              <Button
                variant="outline"
                className="bg-white text-[hsl(var(--text-primary))] border border-border"
                size="xl"
              >
                <div className="btnPlay">
                  <PlayCircle size={24} color="#344054" />
                  <span>Xem video</span>
                </div>
              </Button>
            </div>
          </div>
          <div className="column-50">
            <Image
              src="/images/home/home-1.png"
              alt="home-banner"
              className="banner-image"
              width={866}
              height={490}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
