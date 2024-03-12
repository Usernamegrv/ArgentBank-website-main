import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "../../components/form/Form.jsx";
import "./Login.css";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.userReducer.token);

  useEffect(() => {
    if (token) {
      navigate("/DashBoard");
    }
  }, [token, navigate]);
  return (
    <main className=" main bg-dark">
      <Form />
    </main>
  );
}

export default Login;
