import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@/assets/icons/facebook.svg";
import SwiterIcon from "@/assets/icons/switer.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import EmailIcon from "@/assets/icons/email.svg";
import MarkerIcon from "@/assets/icons/marker.svg";

import "./styles.scss";
// Tải component phía client một cách động
const FooterForm = dynamic(() => import("./FooterForm"), { ssr: false });

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer__content">
        <div className="footer__content-top">
          <div className="container footer__content-top__content">
            <div className="company-info">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Cenvi Logo"
                  width={175}
                  className="logo"
                  height={30}
                  priority
                />
              </Link>
              <p className="footer_description">
                Cenvi Launch là hệ sinh thái hỗ trợ khởi nghiệp toàn diện hàng
                đầu Việt Nam. Chúng tôi đồng hành cùng bạn từ những bước đầu
                tiên, cung cấp giải pháp trọn gói từ thành lập doanh nghiệp đến
                phát triển bền vững.
              </p>

              <ul className="footer-contact__list">
                <li className="footer-contact__list-item">
                  <Link href="/">
                    <FacebookIcon />
                  </Link>
                </li>
                <li className="footer-contact__list-item">
                  <Link href="/">
                    <SwiterIcon />
                  </Link>
                </li>
                <li className="footer-contact__list-item">
                  <Link href="/">
                    <InstagramIcon />
                  </Link>
                </li>
                <li className="footer-contact__list-item">
                  <Link href="/">
                    <LinkedinIcon />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <div className="footer-menu__column">
                <h4 className="column-title">Dịch vụ</h4>
                <ul className="footer__sub-menu">
                  <li>
                    <Link href="#" className="link-item">
                      Thành lập doanh nghiệp
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="link-item">
                      Kế toán thuế
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="link-item">
                      Tư vấn & tạo website
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="link-item">
                      Báo cáo tài chính
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-menu__column">
                <h4 className="column-title">Địa chỉ liên hệ</h4>
                <ul className="footer-menu__list">
                  <li className="footer-menu__list-item">
                    <MarkerIcon />
                    <span>
                      Nhà Liền kê L5.17 - 18, Khu Liền kề Hải ngân, ngõ 51 Đường
                      Thanh Liệt, Thanh Trì, Hà Nội,
                    </span>
                  </li>
                  <li className="footer-menu__list-item">
                    <PhoneIcon />
                    <span>097 8888 503</span>
                  </li>
                  <li className="footer-menu__list-item">
                    <EmailIcon />
                    <span>marketing@cenvi.vn</span>
                  </li>
                </ul>
              </div>
              <div className="footer-menu__column">
                <h4 className="column-title">Giờ làm việc</h4>
                <span>Thứ 2 - Thứ 7: 8:30 - 17:30 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content-bottom">
          <span>© Copyright by Marketing Cenvi</span>
        </div>
      </div>
    </footer>
  );
}
