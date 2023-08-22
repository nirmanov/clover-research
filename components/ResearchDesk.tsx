import styles from "@/styles/ResearchDesk.module.scss";
import Image from "next/image";
import researchDeskImg from "@/public/images/research-desk.png";

const ResearchDesk = () => {
  return (
    <section className={styles.researchDesk}>
      <div className={styles.researchDesk__wrapper}>
        <div className={styles.researchDesk__info}>
          <h3
            className={styles.researchDesk__title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Зачем нужны опросники <br /> для врачей
          </h3>
          <ul className={styles.researchDesk__list}>
            <li
              className={styles.researchDesk__listItem}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Опыт использования медицинских препаратов
            </li>
            <li
              className={styles.researchDesk__listItem}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Социологические исследования
            </li>
            <li
              className={styles.researchDesk__listItem}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Live - аналитика
            </li>
          </ul>
        </div>
        <div className={styles.researchDesk__imgContainer}>
          <Image
            src={researchDeskImg}
            alt="Image"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          />
        </div>
      </div>
    </section>
  );
};

export default ResearchDesk;
