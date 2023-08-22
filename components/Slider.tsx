"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { SliderItemType } from "@/types/types";
import clsx from "clsx";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "@/styles/Slider.module.scss";
import img1 from "@/public/images/slide-1.png";
import img2 from "@/public/images/slide-2.png";
import img3 from "@/public/images/slide-3.png";
import img4 from "@/public/images/slide-4.png";
import img5 from "@/public/images/slide-5.png";
import img6 from "@/public/images/slide-6.png";

const Slider: React.FC = () => {
  const images: SliderItemType[] = [
    {
      imageSrc: img1,
      imageAlt: "image",
    },
    {
      imageSrc: img2,
      imageAlt: "image",
    },
    {
      imageSrc: img3,
      imageAlt: "image",
    },
    {
      imageSrc: img4,
      imageAlt: "image",
    },
    {
      imageSrc: img5,
      imageAlt: "image",
    },
    {
      imageSrc: img6,
      imageAlt: "image",
    },
  ];

  const imagePairs: SliderItemType[][] = [];
  for (let i = 0; i < images.length; i += 2) {
    const pair = images.slice(i, i + 2);
    imagePairs.push(pair);
  }

  return (
    <section className={styles.slider}>
      <h3
        className={styles.slider__title}
        data-aos="fade-up"
        data-aos-once="true"
      >
        <span>От прототипов </span>
        <span>до уникального дизайна</span>
      </h3>

      <Swiper
        data-aos="fade-up"
        data-aos-once="true"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{ el: ".custom-pagination", clickable: true }}
      >
        {imagePairs.map((pair, index) => (
          <SwiperSlide className={styles.slider__slide} key={index}>
            {pair.map((image, imageIndex) => (
              <Image
                key={imageIndex}
                src={image.imageSrc}
                alt={image.imageAlt}
                // fill
                sizes="(min-width: 808px) 340px, 100vw"
                className={styles.slider__img}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.slider__navContainer}>
        <button
          className={clsx(styles.slider__navPrev, "custom-prev")}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="27"
            viewBox="0 0 15 27"
            fill="none"
          >
            <path
              d="M13 2L2 13.5L13 25"
              stroke="#505050"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          className={clsx(styles.slider__pagination, "custom-pagination")}
        ></div>
        <button
          className={clsx(styles.slider__navNext, "custom-next")}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="27"
            viewBox="0 0 15 27"
            fill="none"
          >
            <path
              d="M2 2L13 13.5L2 25"
              stroke="#505050"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;
