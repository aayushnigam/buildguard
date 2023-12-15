import { FunctionComponent } from "react";
import styles from "./DamageClassContainer.module.css";

const DamageClassContainer: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.sensorDetails}>
        <p className={styles.frame1} id="Damage Description">
          <div className={styles.damageWith60Container}>
            <p className={styles.p}>{` `}</p>
            <p className={styles.damageWith60}>
              <a href="/healthy-structure">Damage with 60% increase of mass of 7th Floor/Slab</a>
            </p>
          </div>
        </p>
        <div className={styles.frame2}>
          <div className={styles.frame3} />
          <div className={styles.frame4}>
            <div
              className={styles.descriptionOfDamage}
            >{`Description of Damage Class `}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamageClassContainer;
