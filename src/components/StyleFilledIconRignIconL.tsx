import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StyleFilledIconRignIconL.module.css";

type StyleFilledIconRignIconLType = {
  /** Style props */
  styleFilledIconRignIconLBorderRadius?: CSSProperties["borderRadius"];
  styleFilledIconRignIconLBackgroundColor?: CSSProperties["backgroundColor"];
  styleFilledIconRignIconLBoxShadow?: CSSProperties["boxShadow"];
  styleFilledIconRignIconLDisplay?: CSSProperties["display"];
  styleFilledIconRignIconLFlexDirection?: CSSProperties["flexDirection"];
  styleFilledIconRignIconLAlignItems?: CSSProperties["alignItems"];
  styleFilledIconRignIconLJustifyContent?: CSSProperties["justifyContent"];
  styleFilledIconRignIconLPadding?: CSSProperties["padding"];
  styleFilledIconRignIconLBoxSizing?: CSSProperties["boxSizing"];
  styleFilledIconRignIconLPosition?: CSSProperties["position"];
  styleFilledIconRignIconLTop?: CSSProperties["top"];
  styleFilledIconRignIconLLeft?: CSSProperties["left"];
  styleFilledIconRignIconLCursor?: CSSProperties["cursor"];

  /** Action props */
  onButtonStyle2ShadowClick?: () => void;
};

const StyleFilledIconRignIconL: FunctionComponent<
  StyleFilledIconRignIconLType
> = ({
  styleFilledIconRignIconLBorderRadius,
  styleFilledIconRignIconLBackgroundColor,
  styleFilledIconRignIconLBoxShadow,
  styleFilledIconRignIconLDisplay,
  styleFilledIconRignIconLFlexDirection,
  styleFilledIconRignIconLAlignItems,
  styleFilledIconRignIconLJustifyContent,
  styleFilledIconRignIconLPadding,
  styleFilledIconRignIconLBoxSizing,
  styleFilledIconRignIconLPosition,
  styleFilledIconRignIconLTop,
  styleFilledIconRignIconLLeft,
  styleFilledIconRignIconLCursor,
  onButtonStyle2ShadowClick,
}) => {
  const styleFilledIconRignIconLStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: styleFilledIconRignIconLBorderRadius,
      backgroundColor: styleFilledIconRignIconLBackgroundColor,
      boxShadow: styleFilledIconRignIconLBoxShadow,
      display: styleFilledIconRignIconLDisplay,
      flexDirection: styleFilledIconRignIconLFlexDirection,
      alignItems: styleFilledIconRignIconLAlignItems,
      justifyContent: styleFilledIconRignIconLJustifyContent,
      padding: styleFilledIconRignIconLPadding,
      boxSizing: styleFilledIconRignIconLBoxSizing,
      position: styleFilledIconRignIconLPosition,
      top: styleFilledIconRignIconLTop,
      left: styleFilledIconRignIconLLeft,
      cursor: styleFilledIconRignIconLCursor,
    };
  }, [
    styleFilledIconRignIconLBorderRadius,
    styleFilledIconRignIconLBackgroundColor,
    styleFilledIconRignIconLBoxShadow,
    styleFilledIconRignIconLDisplay,
    styleFilledIconRignIconLFlexDirection,
    styleFilledIconRignIconLAlignItems,
    styleFilledIconRignIconLJustifyContent,
    styleFilledIconRignIconLPadding,
    styleFilledIconRignIconLBoxSizing,
    styleFilledIconRignIconLPosition,
    styleFilledIconRignIconLTop,
    styleFilledIconRignIconLLeft,
    styleFilledIconRignIconLCursor,
  ]);

  return (
    <div
      className={styles.stylefilledIconrignIconl}
      style={styleFilledIconRignIconLStyle}
      onClick={onButtonStyle2ShadowClick}
    >
      <div className={styles.buttonParent}>
        <div className={styles.button}>Button</div>
        <img className={styles.arrowRightOIcon} alt="" src="/arrowrighto.svg" />
      </div>
    </div>
  );
};

export default StyleFilledIconRignIconL;
