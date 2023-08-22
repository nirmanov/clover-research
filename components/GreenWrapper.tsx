import styles from "@/styles/GreenWrapper.module.scss";

export default function GreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.greenWrapper}>
      <div className="container">{children}</div>
    </div>
  );
}
