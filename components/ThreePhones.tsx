import styles from "@/styles/ThreePhones.module.scss";
import Image from "next/image";
import phone_1 from "@/public/images/phone-1.png";
import phone_2 from "@/public/images/phone-2.png";
import phone_3 from "@/public/images/phone-3.png";

const ThreePhones = () => {
  return (
    <section className={styles.threePhones}>
      <div className={styles.threePhones__wrapper}>
        <div
          className={styles.threePhones__item}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <Image src={phone_1} alt="Image" />
        </div>
        <div
          className={styles.threePhones__item}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <Image src={phone_2} alt="Image" />
        </div>
        <div
          className={styles.threePhones__item}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <Image src={phone_3} alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default ThreePhones;
