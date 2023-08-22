"use client";
import React from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import Image from "next/image";
import logo from "@/public/images/logo.svg";
import clsx from "clsx";
import Button from "@/components/common/Button";
import BurgerBtn from "@/components/common/MenuBtn";
import Breadcrumb from "@/components/Breadcrumb";

const Header = () => {
  const breadcrumb = [
    { url: "/", name: "Главная" },
    { url: "/", name: "Кейсы" },
    { url: "/", name: "Clover Research" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__top}>
          <Link href="/">
            <Image className={styles.header__logo} src={logo} alt="JoyDev" />
          </Link>
          <div className={styles.header__btnsWrapper}>
            <Button className={clsx("btn", "btnPrimary", styles.header__btn)}>
              Заказать разработку
            </Button>
            <BurgerBtn />
          </div>
        </div>
        <div className={styles.header__bottom}>
          <Breadcrumb breadcrumbItems={breadcrumb} />
        </div>
      </div>
    </header>
  );
};

export { Header };
