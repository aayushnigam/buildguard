import { FunctionComponent } from "react";
import styles from "./DetailsContainer.module.css";

const DetailsContainer: FunctionComponent = () => {
  return (
    <div className={styles.sensorDetails}>
      <div className={styles.sensorDetailsChild} />
      <div className={styles.card} />
      <div className={styles.frame}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frame1}>
        <div className={styles.date20231005Container}>
          <p className={styles.startTimeEndTime}>
            <span>
              <span className={styles.date}>Date :</span>
              <span className={styles.span}> 2023.10.05</span>
              <span className={styles.lastCheckedDate}>{` `}</span>
            </span>
          </p>
          <p className={styles.startTimeEndTime}>
            <span>
              <span
                className={styles.lastCheckedDate}
              >{`Last Checked Date: `}</span>
              <span>2017.01.23</span>
            </span>
          </p>
          <p className={styles.startTimeEndTime}>
            <span>
              <span>{`Start Time : End Time : `}</span>
            </span>
          </p>
          <p className={styles.startTimeEndTime}>
            <span className={styles.lastCheckedDate}>
              <span>{`Structure Description  : `}</span>
              <span className={styles.shearFrameBuilding}>
                Shear Frame Building
              </span>
            </span>
          </p>
          <p className={styles.lastStatusDamageWith50}>
            <span className={styles.lastCheckedDate}>
              <span className={styles.lastStatus}>{`Last Status : `}</span>
              <span>{`Damage with 50% increase of `}</span>
            </span>
          </p>
          <p className={styles.startTimeEndTime}>
            <span className={styles.lastCheckedDate}>
              <span> mass of 10th Floor/Slab</span>
            </span>
          </p>
          <p className={styles.startTimeEndTime}>
            <span className={styles.lastCheckedDate}>
              <span>{` `}</span>
            </span>
          </p>
          <p className={styles.startTimeEndTime}>
            <span>
              <span className={styles.blankLine1}>&nbsp;</span>
            </span>
          </p>
        </div>
      </div>
      <div className={styles.frame2}>
        <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      </div>
      <div className={styles.frame3}>
        <div className={styles.details}>Details</div>
      </div>
    </div>
  );
};

export default DetailsContainer;
