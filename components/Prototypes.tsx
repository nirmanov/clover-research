import styles from "@/styles/Prototypes.module.scss";
import Image from "next/image";
import prototypeImg from "@/public/images/prototype-big.png";

const Prototypes = () => {
  return (
    <section className={styles.prototypes}>
      <div className={styles.prototypes__top}>
        <span
          className={styles.prototypes__amount}
          data-aos="fade-up"
          data-aos-once="true"
        >
          30+
        </span>
        <span
          className={styles.prototypes__text}
          data-aos="fade-up"
          data-aos-once="true"
        >
          прототипов
        </span>
        <span
          className={styles.prototypes__descr}
          data-aos="fade-up"
          data-aos-once="true"
        >
          Провели UX-аналитику, предусмотрели все сценарии использования
        </span>
      </div>
      <div className={styles.prototypes__img}>
        <Image
          src={prototypeImg}
          alt="Image"
          data-aos="fade-up"
          data-aos-once="true"
        />
      </div>
    </section>
  );
};

export default Prototypes;
