import styles from "@/styles/TypesOfResearch.module.scss";
import Image from "next/image";
import img1 from "@/public/images/screeners-img-1.png";
import img2 from "@/public/images/screeners-img-2.png";

const TypesOfResearch = () => {
  return (
    <section className={styles.typesOfResearch}>
      <div className="container">
        <div className={styles.typesOfResearch__wrapper}>
          <div className={styles.typesOfResearch__info}>
            <h3
              className={styles.typesOfResearch__title}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Разные виды <span>вопросов</span>
            </h3>
            <ul className={styles.typesOfResearch__list}>
              <li
                className={styles.typesOfResearch__listItem}
                data-aos="fade-up"
                data-aos-once="true"
              >
                Скринеры определяют, подходит ли пользователю опрос
              </li>

              <li
                className={styles.typesOfResearch__listItem}
                data-aos="fade-up"
                data-aos-once="true"
              >
                С простыми или условными переходами зависят от ответов
                пользователей
              </li>
            </ul>
            <div
              className={styles.typesOfResearch__easyUse}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Прост в использовании
            </div>
          </div>
          <div className={styles.typesOfResearch__imgWrapper}>
            <Image
              src={img1}
              alt="img"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="100"
            ></Image>
            <Image
              src={img2}
              alt="img"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="150"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfResearch;
