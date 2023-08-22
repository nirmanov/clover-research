import styles from "@/styles/Functional.module.scss";
import Image from "next/image";

const Functional = () => {
  return (
    <section className={styles.functional}>
      <div className={styles.functional__wrapper}>
        <h3
          className={styles.functional__title}
          data-aos="fade-up"
          data-aos-once="true"
        >
          Функционал Clover Research
        </h3>
        <ul className={styles.functional__list}>
          <li
            className={styles.functional__listItem}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66" height="66" rx="14" fill="#F3F8EB" />
              <path
                d="M33 47H47M40 20.0161C40.6188 19.3655 41.4582 19 42.3333 19C42.7667 19 43.1958 19.0897 43.5961 19.2641C43.9965 19.4384 44.3602 19.694 44.6667 20.0161C44.9731 20.3382 45.2161 20.7207 45.382 21.1416C45.5478 21.5625 45.6332 22.0136 45.6332 22.4692C45.6332 22.9248 45.5478 23.3759 45.382 23.7968C45.2161 24.2177 44.9731 24.6001 44.6667 24.9223L25.2222 45.3646L19 47L20.5556 40.4584L40 20.0161Z"
                stroke="#83AD32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span> Регистрация пользователя</span>
          </li>
          <li
            className={styles.functional__listItem}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66" height="66" rx="14" fill="#F3F8EB" />
              <path
                d="M43 18C41.6739 18 40.4021 18.5268 39.4645 19.4645C38.5268 20.4021 38 21.6739 38 23V43C38 44.3261 38.5268 45.5979 39.4645 46.5355C40.4021 47.4732 41.6739 48 43 48C44.3261 48 45.5979 47.4732 46.5355 46.5355C47.4732 45.5979 48 44.3261 48 43C48 41.6739 47.4732 40.4021 46.5355 39.4645C45.5979 38.5268 44.3261 38 43 38H23C21.6739 38 20.4021 38.5268 19.4645 39.4645C18.5268 40.4021 18 41.6739 18 43C18 44.3261 18.5268 45.5979 19.4645 46.5355C20.4021 47.4732 21.6739 48 23 48C24.3261 48 25.5979 47.4732 26.5355 46.5355C27.4732 45.5979 28 44.3261 28 43V23C28 21.6739 27.4732 20.4021 26.5355 19.4645C25.5979 18.5268 24.3261 18 23 18C21.6739 18 20.4021 18.5268 19.4645 19.4645C18.5268 20.4021 18 21.6739 18 23C18 24.3261 18.5268 25.5979 19.4645 26.5355C20.4021 27.4732 21.6739 28 23 28H43C44.3261 28 45.5979 27.4732 46.5355 26.5355C47.4732 25.5979 48 24.3261 48 23C48 21.6739 47.4732 20.4021 46.5355 19.4645C45.5979 18.5268 44.3261 18 43 18Z"
                stroke="#83AD32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Получение актуальных опросов по тематике</span>
          </li>
          <li
            className={styles.functional__listItem}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66" height="66" rx="14" fill="#F3F8EB" />
              <path
                d="M36.696 26.6L45.88 42.504M29.304 26.6H47.672M25.608 33L34.792 17.096M29.304 39.4L20.12 23.496M36.696 39.4H18.328M40.392 33L31.208 48.904M49 33C49 41.8366 41.8366 49 33 49C24.1634 49 17 41.8366 17 33C17 24.1634 24.1634 17 33 17C41.8366 17 49 24.1634 49 33Z"
                stroke="#83AD32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span>Помощь с заполнением данных через чат-бот онлайн</span>
          </li>
          <li
            className={styles.functional__listItem}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66" height="66" rx="14" fill="#F3F8EB" />
              <path
                d="M17 40.5L33 48L49 40.5M17 33L33 40.5L49 33M33 18L17 25.5L33 33L49 25.5L33 18Z"
                stroke="#83AD32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Разделение опросов для разных специалистов</span>
          </li>
          <li
            className={styles.functional__listItem}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <svg
              width="66"
              height="66"
              viewBox="0 0 66 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="66" height="66" rx="14" fill="#F3F8EB" />
              <path
                d="M45 46V29.75M32.5 46V20M20 46V36.25"
                stroke="#83AD32"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Сбор данных для live-аналитики</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Functional;
