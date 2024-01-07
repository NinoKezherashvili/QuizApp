import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../store/login/UserSlice";
import { useNavigate } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let userCredentials = {
    //   // email,
    //   // pwd,

    //   _user: "a70cbb19-5e9f-48f9-ba98-e02d33543f1f",
    // };

    let cred = "f3882313-db58-49b3-8b39-e8c7427d045f";

    dispatch(loginUser(cred)).then((result) => {
      if (result.payload && result.payload.role) {
        if (result.payload.role === "admin") {
          setEmail("");
          setPwd("");
          navigate("/welcomeadmin");
        } else {
          setEmail("");
          setPwd("");
          navigate("/welcomeuser");
        }
      } else {
        console.error("Invalid server response:", result);
      }
    });
  };

  const { loading, error } = useSelector((state) => state.user);
  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPwd(e.target.value);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <Container>
      <Row>
        <section>
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Email address"
              value={email}
              onChange={handleUserInput}
              autoComplete="off"
              required
              className="input-login p-1"
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePwdInput}
              value={pwd}
              required
              className="input-login p-2"
            />
            <Link to="/forgorPass" className="p-3">
              {" "}
              Forgot password?
            </Link>

            <Button type="submit" className="btn">
              {loading ? "Loading..." : "Log In"}
            </Button>
            {error && <div style={{ color: "red" }}> {error}</div>}
            <Button className="btn btn-2">Log in using Google </Button>
            <Link to="/signup" className="p-4">
              {" "}
              Don't have an account?
            </Link>
          </form>
        </section>
      </Row>
    </Container>
  );
};

export default Login;
