import React from "react";
import styles from "../styles/Elevator.module.css";

const Elevator1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((floor) => (
          <button key={floor} className={styles.button}>
            {floor}
          </button>
        ))}
      </div>
      <div className={styles.indicators}>
        <div className={`${styles.indicator} ${styles.moving}`}>Moving</div>
        <div className={styles.indicator}>Floor 5</div>
        <div className={styles.indicator}>Door Closed</div>
      </div>
    </div>
  );
};

export default Elevator1;
