import * as React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-block">
          <img
            className="footer-logo"
            src="https://415022.lp.tobiz.net/img/350x0/0f37fba05b3c41fe5c5da1f593623cdc.png"
          />
        </div>

        <div className="footer-info">
          <p>123456, г. Москва, ул. Центральная 1, офис 1</p>
          <p>ИНН 1234567890 ОГРН 123456789012</p>

          <p className="footer-conf">
            Политика конфиденциальности
          </p>
        </div>

        <div className="footer-contacts">
          <p className="footer-phone">
            <span className="footer-phone-icon"></span>
            8 822 121 22 33
          </p>

          <p className="footer-call-text">
            Звонок по России бесплатный
          </p>

          <div className="footer-socials">
            <div className="footer-social-vk">
              <img src="https://png.klev.club/uploads/posts/2024-05/png-klev-club-z7sm-p-vk-png-2.png" />
            </div>

            <div className="footer-social-maks">
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_MAX.svg/1280px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_MAX.svg.png?utm_source=ru.wikipedia.org&utm_campaign=index&utm_content=thumbnail"  />
            </div>

            <div className="footer-social-v">
              <img src="https://cdn-icons-png.flaticon.com/512/4494/4494491.png" />
            </div>

            <div className="footer-social-rutube">
              <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Rutube_icon.svg/960px-Rutube_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" />
            </div>

            <div className="footer-social-cian">
              <img src="https://util.1c-bitrix.ru/upload/bx24vendor/3ba/t3fw8bhnknlcicviei4zi8gunz6k8oyp/3261.png" />
            </div>
          </div>
        </div>

        <div className="footer-line" />
      </div>
    </footer>
  );
}