import { FunctionComponent } from "react";
import styles from "./SignInFormContainer.module.css";

const SignInFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.login}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/line-6.svg" />
          <div className={styles.orSignIn}>or sign in with</div>
          <img className={styles.frameItem} alt="" src="/line-7.svg" />
        </div>
        <div className={styles.social}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <img className={styles.icon1} alt="" src="/icon1.svg" />
          <img className={styles.icon1} alt="" src="/icon2.svg" />
        </div>
      </div>
    </div>
  );
};

export default SignInFormContainer;
