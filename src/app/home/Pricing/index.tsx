"use client";

import clsx from "clsx";
import UnderText from "@/components/shares/UnderText";
import PriceItem from "./PriceItem";
import Icon1 from "@/assets/icons/price-level-1.svg";
import Icon2 from "@/assets/icons/price-level-2.svg";
import Icon3 from "@/assets/icons/price-level-3.svg";

import styles from "./styles.module.scss";

const Pricing = () => {
  return (
    <div className={clsx([styles.pricingBlock, "common-layout"])}>
      <div className="container">
        <div className="pricing-content">
          <div className="top-content">
            <h2 className="common-sub-title">
              Khám khá các <UnderText text="gói dịch vụ" /> của chúng tôi
            </h2>
            <p className="common-description">
              Nền tảng đầu tiên tại Việt Nam áp dụng công nghệ Trí tuệ nhân tạo
              (AI) để hỗ trợ thành lập doanh nghiệp
            </p>
          </div>
          {/* <div className="advertisement">block advertisement </div> */}

          <div className="list-pricing">
            <PriceItem
              title="Gói toàn diện"
              subTitle="Thanh toán hàng tháng."
              icon={<Icon1 />}
              isActive
              isPopular={false}
              features={[
                "Giấy phép đăng ký kinh doanh",
                "Tài khoản doanh nghiệp số đẹp",
                "Thuế môn bài năm đầu tiên",
                "Thông báo tiến độ hồ sơ tự động",
                "Cảnh báo thay đổi về thuế và cập nhật thuế",
              ]}
            />
            <PriceItem
              title="Gói toàn diện"
              subTitle="Thanh toán hàng tháng."
              icon={<Icon2 />}
              isPopular
              features={[
                "Giấy phép đăng ký kinh doanh",
                "Tài khoản doanh nghiệp số đẹp",
                "Thuế môn bài năm đầu tiên",
                "Thông báo tiến độ hồ sơ tự động",
                "Cảnh báo thay đổi về thuế và cập nhật thuế",
              ]}
            />
            <PriceItem
              title="Gói toàn diện"
              isPopular={false}
              subTitle="Thanh toán hàng tháng."
              icon={<Icon3 />}
              features={[
                "Giấy phép đăng ký kinh doanh",
                "Tài khoản doanh nghiệp số đẹp",
                "Thuế môn bài năm đầu tiên",
                "Thông báo tiến độ hồ sơ tự động",
                "Cảnh báo thay đổi về thuế và cập nhật thuế",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
