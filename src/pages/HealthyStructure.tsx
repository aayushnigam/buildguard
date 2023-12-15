import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Light from "../components/Property1Light";
import SensorDetailsContainer from "../components/SensorDetailsContainer";
import styles from "./HealthyStructure.module.css";

const HealthyStructure: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/details-page");
  }, [navigate]);

  return (
    <div className={styles.healthyStructure}>
      <div className={styles.rectangle} />
      <img className={styles.bgIcon} alt="" src="/bg1.svg" />
      <div className={styles.healthyStructureChild} />
      <button className={styles.back} id="back">
        <div className={styles.backChild} onClick={onRectangle2Click} />
        <img className={styles.backItem} alt="" src="/arrow-1.svg" />
      </button>
      <Property1Light
        iconCode="/iconlyboldhome2.svg"
        property1LightJustifyContent="center"
        property1LightGap="20px"
        property1LightAlignSelf="unset"
        property1LightPosition="absolute"
        property1LightTop="735px"
        property1LightLeft="-8px"
        property1LightWidth="375px"
        property1LightHeight="70px"
        homeColor="#03014c"
        searchFontWeight="600"
        searchFontFamily="Gilroy"
      />
      <div className={styles.healthyStructure1}>Healthy Structure</div>
      <img className={styles.image4Icon} alt="" src="/Correct@2x.png" />
      <SensorDetailsContainer />
    </div>
  );
};

export default HealthyStructure;
