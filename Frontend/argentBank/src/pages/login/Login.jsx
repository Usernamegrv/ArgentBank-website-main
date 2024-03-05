import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";
import Form from "../../components/form/Form.jsx";
import "./Login.css";
// import { postUser } from "../../redux/utils/apiCalls.js";
import { getUserProfil } from "../../redux/utils/apiCalls.js";
import { postFormData } from "../../redux/utils/apiCalls.js";

// import { useEffect } from "react";

function Login(email, password) {
  postFormData(email, password).then((result) => {
    if (result === "Token received with success") {
      getUserProfil(localStorage.getItem("token"));
    } else {
      console.log("Error", result);
    }
  });

  return (
    <div>
      <Header />
      <main className=" main bg-dark">
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default Login;
