// import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@/assets/icons/facebook.svg";
import SwiterIcon from "@/assets/icons/switer.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
// import LinkedinIcon from "@/assets/icons/linkedin.svg";
// import PhoneIcon from "@/assets/icons/phone.svg";
// import EmailIcon from "@/assets/icons/email.svg";
// import MarkerIcon from "@/assets/icons/marker.svg";
import GitHubIcon from "@/assets/icons/github.svg";

import "./styles.scss";
// Tải component phía client một cách động
// const FooterForm = dynamic(() => import("./FooterForm"), { ssr: false });

export default function Footer() {
  return (
    <footer className="footer__wrapper">
      <div className="footer__content">
        <div className="footer__content-top">
          <div className="container footer__content-top__main">
            <div className="company-info">
              <Link href="/">
                <Image
                  src="/images/footer_logo.png"
                  alt="Cenvi Logo"
                  width={200}
                  className="logo"
                  height={32}
                  priority
                />
              </Link>
              <p className="footer_description">
                Cenvi Launch là hệ sinh thái hỗ trợ khởi nghiệp toàn diện hàng
                đầu Việt Nam. Chúng tôi đồng hành cùng bạn từ những bước đầu
                tiên, cung cấp giải pháp trọn gói từ thành lập doanh nghiệp đến
                phát triển bền vững.
              </p>
            </div>
            <div className="footer-menu">
              <div className="left-menu">
                <div className="column">
                  <h4 className="title">Công ty</h4>
                  <ul className="sub-menu">
                    <li>
                      <Link href="#" className="link-item">
                        Giới thiệu
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Liên hệ
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Tin tức
                      </Link>
                      <span className="new-label">New</span>
                    </li>
                  </ul>
                </div>
                <div className="column">
                  <h4 className="title">Dịch vụ</h4>
                  <ul className="sub-menu">
                    <li>
                      <Link href="#" className="link-item">
                        Kế toán thuế
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Thiết kế & xây dựng website
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Thiết kế logo
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Dịch vụ marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Media kit
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Thay đổi đăng ký
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="link-item">
                        Dịch vụ tư vấn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right-menu">
                <div className="block">
                  <h4 className="title">Địa chỉ liên hệ</h4>
                  <p className="info">
                    <span>
                      Nhà Liền kê L5.17 - 18, Khu Liền kề Hải ngân, ngõ 51 Đường
                      Thanh Liệt, Thanh Trì, Hà Nội.
                    </span>
                    <span>097 8888 503</span>
                    <span>marketing@cenvi.vn</span>
                  </p>
                </div>
                <div className="block">
                  <h4 className="title">Giờ làm việc</h4>
                  <span>08:00 am - 17:00 pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__content-bottom__wrapper">
          <div className="container">
            <div className="footer__content-bottom">
              <span>© Copyright by Marketing Cenvi</span>
              <ul className="footer-contact__list">
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
                    <FacebookIcon />
                  </Link>
                </li>
                <li className="footer-contact__list-item">
                  <Link href="/">
                    <GitHubIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
