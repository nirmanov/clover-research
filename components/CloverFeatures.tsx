import styles from "@/styles/CloverFeatures.module.scss";
import Image from "next/image";
import img1 from "@/public/images/feature-1-460-790.png";
import img2 from "@/public/images/feature-2-451-721.png";
import img3 from "@/public/images/feature-3-275-573.png";
import img4 from "@/public/images/feature-m-top.png";
import img5 from "@/public/images/feature-m-middle.png";
import img6 from "@/public/images/feature-m-btm.png";

const CloverFeatures = () => {
  return (
    <section className={styles.cloverFeatures}>
      <div className="container">
        <div className={styles.cloverFeatures__wrapper}>
          <div className={styles.cloverFeatures__chatImage}>
            <div className={styles.cloverFeatures__previewWrapper}>
              <Image
                className={styles.cloverFeatures__phoneFront}
                src={img1}
                alt="img"
                data-aos="fade-up"
                data-aos-once="true"
              />
              <Image
                className={styles.cloverFeatures__phoneMiddle}
                src={img2}
                alt="img"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              />
              <Image
                className={styles.cloverFeatures__phoneBack}
                src={img3}
                alt="img"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="150"
              />
              <Image
                className={styles.cloverFeatures__messageTop}
                src={img4}
                alt="img"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              />
              <Image
                className={styles.cloverFeatures__messageMiddle}
                src={img5}
                alt="img"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="150"
              />
              <Image
                className={styles.cloverFeatures__messageBottom}
                src={img6}
                alt="img"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="200"
              />
            </div>
          </div>
          <div className={styles.cloverFeatures__info}>
            <h3
              className={styles.cloverFeatures__title}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Фишка проекта
              <span> чат-бот</span>
            </h3>
            <p
              className={styles.cloverFeatures__descr}
              data-aos="fade-up"
              data-aos-once="true"
            >
              Хелп-деск помогает пользователям заполнять данные
            </p>
            <ul className={styles.cloverFeatures__list}>
              <li
                className={styles.cloverFeatures__listItem}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="50" height="50" rx="8" fill="white" />
                  <path
                    d="M37 37V34.2222C37 32.7488 36.3942 31.3357 35.3159 30.2939C34.2375 29.252 32.775 28.6667 31.25 28.6667H19.75C18.225 28.6667 16.7625 29.252 15.6841 30.2939C14.6058 31.3357 14 32.7488 14 34.2222V37"
                    fill="white"
                  />
                  <path
                    d="M25.5 23.1111C28.6756 23.1111 31.25 20.6238 31.25 17.5556C31.25 14.4873 28.6756 12 25.5 12C22.3244 12 19.75 14.4873 19.75 17.5556C19.75 20.6238 22.3244 23.1111 25.5 23.1111Z"
                    fill="white"
                  />
                  <path
                    d="M37 37V34.2222C37 32.7488 36.3942 31.3357 35.3159 30.2939C34.2375 29.252 32.775 28.6667 31.25 28.6667H19.75C18.225 28.6667 16.7625 29.252 15.6841 30.2939C14.6058 31.3357 14 32.7488 14 34.2222V37M31.25 17.5556C31.25 20.6238 28.6756 23.1111 25.5 23.1111C22.3244 23.1111 19.75 20.6238 19.75 17.5556C19.75 14.4873 22.3244 12 25.5 12C28.6756 12 31.25 14.4873 31.25 17.5556Z"
                    stroke="#83AD32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Личные данные</span>
              </li>
              <li
                className={styles.cloverFeatures__listItem}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="50" height="50" rx="8" fill="white" />
                  <path
                    d="M38 24.9086L26.1806 36.2352C24.7326 37.6228 22.7687 38.4023 20.721 38.4023C18.6733 38.4023 16.7094 37.6228 15.2614 36.2352C13.8135 34.8476 13 32.9656 13 31.0033C13 29.0409 13.8135 27.1589 15.2614 25.7714L27.0809 14.4448C28.0462 13.5197 29.3554 13 30.7206 13C32.0857 13 33.395 13.5197 34.3603 14.4448C35.3256 15.3698 35.8679 16.6245 35.8679 17.9327C35.8679 19.2409 35.3256 20.4956 34.3603 21.4207L22.528 32.7473C22.0453 33.2098 21.3907 33.4696 20.7081 33.4696C20.0256 33.4696 19.3709 33.2098 18.8883 32.7473C18.4056 32.2847 18.1345 31.6574 18.1345 31.0033C18.1345 30.3492 18.4056 29.7218 18.8883 29.2593L29.8074 18.8078"
                    fill="white"
                  />
                  <path
                    d="M38 24.9086L26.1806 36.2352C24.7326 37.6228 22.7687 38.4023 20.721 38.4023C18.6733 38.4023 16.7094 37.6228 15.2614 36.2352C13.8135 34.8476 13 32.9656 13 31.0033C13 29.0409 13.8135 27.1589 15.2614 25.7714L27.0809 14.4448C28.0462 13.5197 29.3554 13 30.7206 13C32.0857 13 33.395 13.5197 34.3603 14.4448C35.3256 15.3698 35.8679 16.6245 35.8679 17.9327C35.8679 19.2409 35.3256 20.4956 34.3603 21.4207L22.528 32.7473C22.0453 33.2098 21.3907 33.4696 20.7081 33.4696C20.0256 33.4696 19.3709 33.2098 18.8883 32.7473C18.4056 32.2847 18.1345 31.6574 18.1345 31.0033C18.1345 30.3492 18.4056 29.7218 18.8883 29.2593L29.8074 18.8078"
                    stroke="#83AD32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span>Регистрация</span>
              </li>
              <li
                className={styles.cloverFeatures__listItem}
                data-aos="fade-up"
                data-aos-once="true"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="50" height="50" rx="8" fill="white" />
                  <path
                    d="M20.2632 23.2222L23.8947 27.0556L36 14.2778"
                    fill="white"
                  />
                  <path
                    d="M34.7895 24.5V33.4444C34.7895 34.1222 34.5344 34.7722 34.0804 35.2515C33.6263 35.7308 33.0105 36 32.3684 36H15.4211C14.7789 36 14.1631 35.7308 13.7091 35.2515C13.2551 34.7722 13 34.1222 13 33.4444V15.5556C13 14.8778 13.2551 14.2278 13.7091 13.7485C14.1631 13.2692 14.7789 13 15.4211 13H28.7368"
                    fill="white"
                  />
                  <path
                    d="M20.2632 23.2222L23.8947 27.0556L36 14.2778M34.7895 24.5V33.4444C34.7895 34.1222 34.5344 34.7722 34.0804 35.2515C33.6263 35.7308 33.0105 36 32.3684 36H15.4211C14.7789 36 14.1631 35.7308 13.7091 35.2515C13.2551 34.7722 13 34.1222 13 33.4444V15.5556C13 14.8778 13.2551 14.2278 13.7091 13.7485C14.1631 13.2692 14.7789 13 15.4211 13H28.7368"
                    stroke="#83AD32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>Опросы</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloverFeatures;
