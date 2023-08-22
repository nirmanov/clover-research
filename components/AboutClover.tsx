import styles from "@/styles/AboutClover.module.scss";
import clsx from "clsx";

const AboutClover = () => {
  return (
    <section className={clsx("container", styles.aboutClover)}>
      <div className={styles.aboutClover__wrapper}>
        <div className={styles.aboutClover__row}>
          <div className={styles.aboutClover__bg}></div>
          <div
            className={styles.aboutClover__title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Что такое <br /> Clover Research?
          </div>
          <div className={styles.aboutClover__info}>
            <p data-aos="fade-up" data-aos-once="true">
              Маркетинговые исследования <br /> в медицине и фармацевтике
            </p>
            <div
              className={styles.aboutClover__doctor}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Целевая аудитория - врачи
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClover;
