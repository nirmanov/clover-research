import styles from "@/styles/LightWrapper.module.scss";

export default function LightWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.lightWrapper}>
      <div className="container">{children}</div>
    </div>
  );
}
