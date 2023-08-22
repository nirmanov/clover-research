import React from "react";
import styles from "@/styles/Breadcrumb.module.scss";
import Link from "next/link";
import clsx from "clsx";

interface BreadcrumbProps {
  breadcrumbItems: Array<BreadcrumbItemProps>;
}

interface BreadcrumbItemProps {
  url: string;
  name: string;
}

const BreadcrumbItem = ({
  url,
  name,
  index,
  isLast,
}: {
  url: string;
  name: string;
  index: number;
  isLast: boolean;
}) => {
  return (
    <>
      <li
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
        key={index}
        className={styles.breadcrumb__item}
      >
        <Link
          itemProp="item"
          href={url}
          className={styles.breadcrumb__itemLink}
        >
          <span
            itemProp="name"
            className={clsx(styles.breadcrumb__itemName, {
              [styles.breadcrumb__itemName_last]: isLast,
            })}
          >
            {name}
          </span>
        </Link>
        <meta itemProp="position" content={index.toString()} />
      </li>

      {isLast ? (
        ""
      ) : (
        <span className={styles.breadcrumb__itemDivider}>
          <svg
            width="20"
            height="9"
            viewBox="0 0 20 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3536 4.85355C19.5488 4.65829 19.5488 4.34171 19.3536 4.14645L16.1716 0.964466C15.9763 0.769204 15.6597 0.769204 15.4645 0.964466C15.2692 1.15973 15.2692 1.47631 15.4645 1.67157L18.2929 4.5L15.4645 7.32843C15.2692 7.52369 15.2692 7.84027 15.4645 8.03553C15.6597 8.2308 15.9763 8.2308 16.1716 8.03553L19.3536 4.85355ZM0 5H19V4H0V5Z"
              fill="#131313"
            />
          </svg>
        </span>
      )}
    </>
  );
};

const Breadcrumb = ({ breadcrumbItems }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className={styles.breadcrumb__list}
      >
        {breadcrumbItems.map((item, index, array) => (
          <BreadcrumbItem
            {...item}
            index={index + 1}
            isLast={array.length - 1 === index}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
