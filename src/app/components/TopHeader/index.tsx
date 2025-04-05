import "./styles.scss";
import ClockIcon from "@/assets/icons/clock.svg";
import EmailIcon from "@/assets/icons/email.svg";
import MarkerIcon from "@/assets/icons/marker.svg";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="top-header__content">
        <span className="top-header__item">
          <ClockIcon />
          <span>Thứ 2 đến Thứ 7: 8:30 sáng - 17:30 chiều</span>
        </span>
        <span className="top-header__item">
          <EmailIcon />
          <span>marketing@cenvi.vn</span>
        </span>
        <span className="top-header__item">
          <MarkerIcon />
          <span>
            Nhà Liên kế L5.17 - 18, Khu Liên kế Hải ngân, ngõ 49a Đường Thanh
            Liệt, Thanh TM, Hà Nội
          </span>
        </span>
      </div>
    </div>
  );
};

export default TopHeader;
