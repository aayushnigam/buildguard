import { FunctionComponent, useCallback } from "react";
import Property1Light from "../components/Property1Light";
import DamageClassContainer from "../components/DamageClassContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Problematic.module.css";

const Problematic: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate("/details-page");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/details-page");
  }, [navigate]);

  return (
    <div className={styles.problematic}>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <Property1Light
            iconCode="/iconlyboldhome2.svg"
            property1LightJustifyContent="space-between"
            property1LightGap="unset"
            property1LightAlignSelf="stretch"
            property1LightPosition="unset"
            property1LightTop="unset"
            property1LightLeft="unset"
            property1LightWidth="unset"
            property1LightHeight="unset"
            homeColor="#03014c"
            searchFontWeight="600"
            searchFontFamily="Gilroy"
          />
        </div>
        <DamageClassContainer />
        <img
          className={styles.frameIcon1}
          id="problem"
          alt=""
          src="/frame1_2x-nobg.png"
        />
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            {/* <button className={styles.back} onClick={onBackClick}> */}
              <div className={styles.backChild} onClick={onRectangleClick} />
              <img className={styles.backItem} alt="" src="/arrow-1.svg" />
            {/* </button> */}
          </div>
          <div className={styles.frame4}>
            <div className={styles.damageClass}>Damage Class</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problematic;
