import UnderText from "@/components/shares/UnderText";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner__wrapper">
      <div className="container">
        <div className="banner__content">
          <div className="column">
            <h1 className="title">
              Dễ dàng thành lập doanh nghiệp. <UnderText text="Miễn phí" /> và
              từ xa.
            </h1>
            <p className="description">
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
          <div className="column">
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
