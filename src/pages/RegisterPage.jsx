import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../store/signup/createData.thunk";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  R E G U L A R      ------  E X P R E S S I O N S
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const fullNameRef = useRef(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const role = {user:'user'}

  //    C H E C K   ------    S T A T E

  const checkValues = () => {
    if (fullName.length < 8) {
      alert(` NEED MORE THEN 8 symbols`);
      return false;
    }
    if (!emailRegex.test(email)) {
      alert(`IS NOT VALID EMAIL `);
      return false;
    }
    if (!passwordRegex.test(passWord)) {
      alert(` AT LEAST 1, CAPITAL, 1 LOWER CASE , 1 speacial character `);

      return false;
    }
    if (passWord !== confirmPassword) {
      alert(` PASSWORDS DOESNT MATCH`);
      return false;
    }
    return true;
  };

  // H A N D L E -------  S U B M I T

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValues()) return false;
    dispatch(createData({ fullName, email, passWord, selectedValue,role }));
    navigate("/home");
    return true;
  };

  useEffect(() => {
    fullNameRef.current.focus();
  }, []);
  //  J S X ___

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 id="register-h1"> Registration </h1>
        <input
          type="text"
          className="input-register mg"
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
          ref={fullNameRef}
        />
        <input
          type="email"
          className="input-register mg"
          placeholder="Email  Adress"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input-register mg"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="input-register mg"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          required
        >
          <option value="">Choose Your Course</option>
          <option value="Front-End React">Frontdend React</option>
          <option value="Python Django">Python Django</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="QA/DIGITAL PRODUCTS">QA/DIGITAL PRODUCTS</option>
        </select>
        <button className="btn"
          disabled={
            !fullName || !passWord || !confirmPassword || !selectedValue
          }
        >
          Sign Up
        </button>
        <Link className="alreadyhaveaccount" to={"/login"}> Already have an account? </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
