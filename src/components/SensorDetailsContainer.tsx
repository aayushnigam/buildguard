import { FunctionComponent } from "react";
import styles from "./SensorDetailsContainer.module.css";

const SensorDetailsContainer: FunctionComponent = () => {
  return (
    <div className={styles.sensorDetails}>
      <p className={styles.frame}>
        <div className={styles.noDamageCurrentlyContainer}>
          <p className={styles.noDamageCurrently}>No Damage Currently</p>
        </div>
      </p>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.frameChild} />
          <div className={styles.frame3}>
            <div
              className={styles.descriptionOfDamage}
            >{`Description of Damage Class `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SensorDetailsContainer;
