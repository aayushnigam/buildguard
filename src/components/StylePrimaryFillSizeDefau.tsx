import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StylePrimaryFillSizeDefau.module.css";

type StylePrimaryFillSizeDefauType = {
  label?: string;
  iconLeft?: boolean;
  iconRight?: boolean;

  /** Style props */
  stylePrimaryFillSizeDefauBackgroundColor?: CSSProperties["backgroundColor"];
  stylePrimaryFillSizeDefauBoxSizing?: CSSProperties["boxSizing"];
  stylePrimaryFillSizeDefauCursor?: CSSProperties["cursor"];
  stylePrimaryFillSizeDefauBorder?: CSSProperties["border"];
  stylePrimaryFillSizeDefauAlignSelf?: CSSProperties["alignSelf"];
  buttonDisplay?: CSSProperties["display"];
  buttonFontFamily?: CSSProperties["fontFamily"];

  /** Action props */
  onButtonClick?: () => void;
};

const StylePrimaryFillSizeDefau: FunctionComponent<
  StylePrimaryFillSizeDefauType
> = ({
  label = "Button",
  iconLeft = true,
  iconRight = true,
  stylePrimaryFillSizeDefauBackgroundColor,
  stylePrimaryFillSizeDefauBoxSizing,
  stylePrimaryFillSizeDefauCursor,
  stylePrimaryFillSizeDefauBorder,
  stylePrimaryFillSizeDefauAlignSelf,
  buttonDisplay,
  buttonFontFamily,
  onButtonClick,
}) => {
  const stylePrimaryFillSizeDefauStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: stylePrimaryFillSizeDefauBackgroundColor,
      boxSizing: stylePrimaryFillSizeDefauBoxSizing,
      cursor: stylePrimaryFillSizeDefauCursor,
      border: stylePrimaryFillSizeDefauBorder,
      alignSelf: stylePrimaryFillSizeDefauAlignSelf,
    };
  }, [
    stylePrimaryFillSizeDefauBackgroundColor,
    stylePrimaryFillSizeDefauBoxSizing,
    stylePrimaryFillSizeDefauCursor,
    stylePrimaryFillSizeDefauBorder,
    stylePrimaryFillSizeDefauAlignSelf,
  ]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      display: buttonDisplay,
      fontFamily: buttonFontFamily,
    };
  }, [buttonDisplay, buttonFontFamily]);

  return (
    <div
      className={styles.styleprimaryfillSizedefau}
      style={stylePrimaryFillSizeDefauStyle}
      onClick={onButtonClick}
    >
      <div className={styles.inside}>
        {iconLeft && (
          <img className={styles.plus01Icon} alt="" src="/plus01.svg" />
        )}
        <b className={styles.button} style={buttonStyle}>
          {label}
        </b>
        {iconRight && (
          <img
            className={styles.plus01Icon}
            alt=""
            src="/iconlightarrowright.svg"
          />
        )}
      </div>
    </div>
  );
};

export default StylePrimaryFillSizeDefau;
