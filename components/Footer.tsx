import styles from "@/styles/Footer.module.scss";
import Link from "next/link";
import Form from "@/components/common/Form/Form";
import SocialLinks from "@/components/common/SocialLinks/SocialLinks";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__contactsWrapper}>
            <h3
              className={styles.footer__title}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Контакты
            </h3>
            <div className={styles.footer__contactsGroup}>
              <Link
                href="/"
                className={styles.footer__telegram}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <span>Telegram</span>
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="46" height="46" rx="23" fill="#039BE5" />
                  <path
                    d="M18.1096 26.1813L17.7256 31.7653C18.2751 31.7653 18.513 31.5213 18.7984 31.2283L21.3744 28.6833L26.7122 32.7243C27.6912 33.2883 28.3809 32.9913 28.645 31.7933L32.1487 14.8214L32.1497 14.8204C32.4602 13.3244 31.6263 12.7394 30.6725 13.1064L10.0778 21.2574C8.67224 21.8214 8.69352 22.6314 9.83886 22.9984L15.1041 24.6913L27.3342 16.7804C27.9098 16.3864 28.4331 16.6044 28.0027 16.9984L18.1096 26.1813Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                className={styles.footer__tel}
                href="tel:88002343262"
                data-aos="fade-up"
                data-aos-once="true"
              >
                8 800 234 32 62
              </Link>
              <Link
                className={styles.footer__mail}
                href="mailto:hello@joy-dev.com"
                data-aos="fade-up"
                data-aos-once="true"
              >
                hello@joy-dev.com
              </Link>

              <address
                className={styles.footer__address}
                data-aos="fade-up"
                data-aos-once="true"
              >
                Россия, 127282, Москва г, Студёный проезд, дом 4, корпус 1, Э
                1/ПОМ V/К 14/ОФ 87
              </address>
            </div>
            <div className={styles.footer__subscribeWrapper}>
              <p
                className={styles.footer__subscribeTitle}
                data-aos="fade-up"
                data-aos-once="true"
              >
                Подписывайтесь
              </p>
              <ul
                className={styles.footer__subscribeSocialList}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <SocialLinks />
              </ul>
            </div>
          </div>
          <div id="form" className={styles.footer__formWrapper}>
            <h3
              className={styles.footer__formTitle}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Давайте знакомится!
            </h3>
            <p
              className={styles.footer__formSubtitle}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Мы всегда рады сотрудничеству и новым проектам
            </p>
            <Form />
          </div>
        </div>
        <div
          className={styles.footer__copyright}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <g clip-path="url(#clip0_1041_301)">
              <path
                d="M12.2812 7C12.2812 3.79886 9.70114 1.21875 6.5 1.21875C3.29886 1.21875 0.71875 3.79886 0.71875 7C0.71875 10.2011 3.29886 12.7812 6.5 12.7812C9.70114 12.7812 12.2812 10.2011 12.2812 7ZM0.5 7C0.5 3.70114 3.20114 1 6.5 1C9.79886 1 12.5 3.70114 12.5 7C12.5 10.2989 9.79886 13 6.5 13C3.20114 13 0.5 10.2989 0.5 7Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M8.04375 8.86875C7.6375 9.19375 7.06875 9.4375 6.5 9.4375C5.11875 9.4375 4.0625 8.38125 4.0625 7C4.0625 5.61875 5.11875 4.5625 6.5 4.5625C7.15 4.5625 7.8 4.80625 8.20625 5.29375L9.1 4.4C8.45 3.75 7.475 3.34375 6.5 3.34375C4.46875 3.34375 2.84375 4.96875 2.84375 7C2.84375 9.03125 4.46875 10.6562 6.5 10.6562C7.39375 10.6562 8.125 10.3313 8.775 9.84375L8.04375 8.86875Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_1041_301">
                <rect
                  width="13"
                  height="13"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>{" "}
          2023 Joy Dev. Все права защищены.{" "}
          <Link className={styles.footer__copyrightLink} href="/">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
