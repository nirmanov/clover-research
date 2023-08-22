import styles from "@/styles/AndroidApp.module.scss";
import Image from "next/image";
import phoneImg from "@/public/images/android-phone.png";

const AndroidApp = () => {
  return (
    <section className={styles.androidApp}>
      <div className="container">
        <div className={styles.androidApp__wrapper}>
          <h3
            className={styles.androidApp__title}
            data-aos="fade-up"
            data-aos-once="true"
          >
            Наша команда разработала приложение для ОС Android
          </h3>
          <div className={styles.androidApp__imageWrapper}>
            <div className={styles.androidApp__bg}>
              <Image
                className={styles.androidApp__image}
                src={phoneImg}
                alt="Android App"
                data-aos="fade-up"
                data-aos-once="true"
              />
              <div
                className={styles.androidApp__textBlock}
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="100"
              >
                <span>Технологии:</span> MVVM, Retrofit, Kotlin Coroutines,
                Pagging 3, Socket.io, Room
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AndroidApp;
