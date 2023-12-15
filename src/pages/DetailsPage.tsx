import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Property1Light from "../components/Property1Light";
import StyleFilledIconRignIconL from "../components/StyleFilledIconRignIconL";
import DetailsContainer from "../components/DetailsContainer";
import styles from "./DetailsPage.module.css";


const DetailsPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonStyle2ShadowClick = useCallback(() => {
    navigate("/problematic");
  }, [navigate]);

  const onDetailsPageContainerClick = useCallback(() => {
    window.open("/problematic");
  }, []);



  return (
    <div className={styles.detailsPage} onClick={onDetailsPageContainerClick}>
      <img className={styles.frameIcon} alt="" src="/frame2.svg" />
      <div className={styles.frame}>
        <div className={styles.frameChild} />
        <div className={styles.detailsPage1}>Details Page</div>
        <img className={styles.frameIcon1} alt="" src="/frame3.svg" />
        <div className={styles.frame1}>
          <div className={styles.frame2} />
        </div>
        <div className={styles.frame3}>
          <Property1Light
            iconCode="/iconlyboldhome2.svg"
            property1LightJustifyContent="center"
            property1LightGap="20px"
            property1LightAlignSelf="unset"
            property1LightPosition="unset"
            property1LightTop="unset"
            property1LightLeft="unset"
            property1LightWidth="375px"
            property1LightHeight="70px"
            homeColor="#03014c"
            searchFontWeight="600"
            searchFontFamily="Gilroy"
          />
        </div>
        {/* <StyleFilledIconRignIconL
          styleFilledIconRignIconLBorderRadius="unset"
          styleFilledIconRignIconLBackgroundColor="unset"
          styleFilledIconRignIconLBoxShadow="unset"
          styleFilledIconRignIconLDisplay="unset"
          styleFilledIconRignIconLFlexDirection="unset"
          styleFilledIconRignIconLAlignItems="unset"
          styleFilledIconRignIconLJustifyContent="unset"
          styleFilledIconRignIconLPadding="unset"
          styleFilledIconRignIconLBoxSizing="unset"
          styleFilledIconRignIconLPosition="absolute"
          styleFilledIconRignIconLTop="559px"
          styleFilledIconRignIconLLeft="calc(50% - 154px)"
          styleFilledIconRignIconLCursor="pointer"
          onButtonStyle2ShadowClick={onButtonStyle2ShadowClick} 
          className={styles.StyleFilledIconRignIconL_buttonParent__jClst}
       />*/}
       <Button
       className={styles.StyleFilledIconRignIconL_buttonParent__jClst}
       onClick={onButtonStyle2ShadowClick}
       >
        Status
        </Button>
        <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          onClick={onButtonStyle2ShadowClick}
          className={styles.greenButton}
        >
          Status
        </Button>
      </div>
        <DetailsContainer />
      </div>
    </div>
  );
};

export default DetailsPage;
