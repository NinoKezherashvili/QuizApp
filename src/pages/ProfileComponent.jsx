import React, { useState } from "react";

import styles from "../styles/profilecomponent.module.css";
import avatar from "../images/avatar..png";
import backarrow from "../images/arrow_forward_ios.png";
import { Link } from "react-router-dom";

const getUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    console.log(user);
  } else {
    user = null;
  }
  return user;
};

function ProfileSettingsComponent() {
  const [user] = useState(getUser());
  return (
    <div className={styles.profile}>
      <div className={styles.profilenavigation}>
        <Link to={"/QuizApp/welcomeadmin"} className={styles.backlink}>
          <img src={backarrow} alt="back arrow" />
        </Link>
        <h1 className={styles.header}>Profile Settings</h1>
      </div>

      <div className={styles.userdata}>
        <img src={avatar} alt="avatar" />
        <input type="text" className={styles.input} placeholder={user.fullname}/>
        <input type="text" className={styles.input} placeholder={user.email} />
      </div>

      <div className={styles.language}>
        <h2>Language</h2>
        <ul>
          <li className={styles.language}>English</li>
          <li className={styles.language}>Georgian</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSettingsComponent;