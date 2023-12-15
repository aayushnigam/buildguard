import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1Light.module.css";

type Property1LightType = {
  iconCode?: string;

  /** Style props */
  property1LightJustifyContent?: CSSProperties["justifyContent"];
  property1LightGap?: CSSProperties["gap"];
  property1LightAlignSelf?: CSSProperties["alignSelf"];
  property1LightPosition?: CSSProperties["position"];
  property1LightTop?: CSSProperties["top"];
  property1LightLeft?: CSSProperties["left"];
  property1LightWidth?: CSSProperties["width"];
  property1LightHeight?: CSSProperties["height"];
  homeColor?: CSSProperties["color"];
  searchFontWeight?: CSSProperties["fontWeight"];
  searchFontFamily?: CSSProperties["fontFamily"];
};

const Property1Light: FunctionComponent<Property1LightType> = ({
  iconCode,
  property1LightJustifyContent,
  property1LightGap,
  property1LightAlignSelf,
  property1LightPosition,
  property1LightTop,
  property1LightLeft,
  property1LightWidth,
  property1LightHeight,
  homeColor,
  searchFontWeight,
  searchFontFamily,
}) => {
  const property1LightStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: property1LightJustifyContent,
      gap: property1LightGap,
      alignSelf: property1LightAlignSelf,
      position: property1LightPosition,
      top: property1LightTop,
      left: property1LightLeft,
      width: property1LightWidth,
      height: property1LightHeight,
    };
  }, [
    property1LightJustifyContent,
    property1LightGap,
    property1LightAlignSelf,
    property1LightPosition,
    property1LightTop,
    property1LightLeft,
    property1LightWidth,
    property1LightHeight,
  ]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      color: homeColor,
    };
  }, [homeColor]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: searchFontWeight,
      fontFamily: searchFontFamily,
    };
  }, [searchFontWeight, searchFontFamily]);

  return (
    <div className={styles.property1light} style={property1LightStyle}>
      <div className={styles.home}>
        <img className={styles.iconlyboldhome} alt="" src={iconCode} />
        <div className={styles.home1} style={homeStyle}>
          Home
        </div>
      </div>
      <div className={styles.search}>
        <img
          className={styles.iconlyboldhome}
          alt=""
          src="/iconlylightsearch1.svg"
        />
        <div className={styles.home1} style={searchStyle}>
          Search
        </div>
      </div>
      <div className={styles.search}>
        <img
          className={styles.iconlyboldhome}
          alt=""
          src="/iconlylightbookmark1.svg"
        />
        <div className={styles.home1}>Wishlist</div>
      </div>
      <div className={styles.search}>
        <img
          className={styles.iconlyboldhome}
          alt=""
          src="/iconlylightprofile1.svg"
        />
        <div className={styles.home1}>Profile</div>
      </div>
    </div>
  );
};

export default Property1Light;
