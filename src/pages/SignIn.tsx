import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Light from "../components/Property1Light";
import StylePrimaryFillSizeDefau from "../components/StylePrimaryFillSizeDefau";
import SignInFormContainer from "../components/SignInFormContainer";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/details-page");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    // Please sync "Sign up" to the project
  }, []);

  return (
    <div className={styles.signIn}>
      <div className={styles.frame}>
        <div className={styles.frame1} />
        <div className={styles.frame2}>
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
            searchFontWeight="unset"
            searchFontFamily="'Abyssinica SIL'"
          />
        </div>
      </div>
      <div className={styles.frame3}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <div className={styles.content}>
              <img className={styles.logoIcon} alt="" src="/logo.svg" />
              <div className={styles.form}>
                <div className={styles.welcomeLoginToContainer}>
                  <p className={styles.welcome}>Welcome,</p>
                  <p className={styles.loginToStart}>
                    login to start with BuildGuard 👋
                  </p>
                </div>
                <div className={styles.fields}>
                  <div className={styles.input}>
                    <div className={styles.email}>Email</div>
                    <input
                      className={styles.frame6}
                      name="email"
                      placeholder="stanley.cohen@gmail.com"
                      type="text"
                    />
                  </div>
                  <div className={styles.input}>
                    <div className={styles.email}>Password</div>
                    <input
                      className={styles.frame7}
                      name="password"
                      type="text"
                    />
                  </div>
                  <div className={styles.forgotPassword}>Forgot Password?</div>
                </div>
                <div className={styles.button}>
                  <StylePrimaryFillSizeDefau
                    label="LOG IN"
                    iconLeft={false}
                    iconRight={false}
                    stylePrimaryFillSizeDefauBackgroundColor="#3640e0"
                    stylePrimaryFillSizeDefauBoxSizing="border-box"
                    stylePrimaryFillSizeDefauCursor="pointer"
                    stylePrimaryFillSizeDefauBorder="none"
                    stylePrimaryFillSizeDefauAlignSelf="stretch"
                    buttonDisplay="inline-block"
                    buttonFontFamily="'Futura PT'"
                    onButtonClick={onButtonClick}
                  />
                  <div
                    className={styles.dontHaveAnContainer}
                    onClick={onDontHaveAnClick}
                  >
                    <span>{`Don’t have an account? `}</span>
                    <span className={styles.register}>REGISTER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SignInFormContainer />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
