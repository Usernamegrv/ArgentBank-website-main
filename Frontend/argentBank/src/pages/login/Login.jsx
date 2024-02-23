import Header from "../../layout/header/Header.jsx";
import Footer from "../../layout/footer/Footer.jsx";
import Form from "../../components/form/Form.jsx";
import "./Login.css";

function Login() {
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
