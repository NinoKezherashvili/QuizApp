import backarrow from "../images/arrow_forward_ios.png";
import { Link } from "react-router-dom";
import styles from "../styles/securitycomponent.module.css"

function ProfileSettingsComponent() {
  return (
    <div className={styles.profile}>
      <div className={styles.profilenavigation}>
        <Link to={"/QuizApp/welcomeadmin"} className={styles.backlink}>
          <img src={backarrow} alt="back arrow" />
        </Link>
        <h1 className={styles.header}>Security</h1>
      </div>

      <div className={styles.userdata}>
        <h2>Change password</h2>
        <input
          type="text"
          className={styles.input}
          placeholder="Change password"
        />
        <input
          type="text"
          className={styles.input}
          placeholder="New password"
        />
        <input
          type="text"
          className={styles.input}
          placeholder="Re-enter password"
        />
      </div>

      <div className={styles.changepassword}>
        <button className={styles.buttonchange}>Change password</button>
      </div>
    </div>
  );
}

export default ProfileSettingsComponent;
