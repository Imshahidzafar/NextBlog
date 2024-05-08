import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>ShahidDev</div>
      <div className={styles.text}>
          ShahidDev creative thoughts agency © All rights reserved
      </div>
    </div>
  )
}

export default Footer
