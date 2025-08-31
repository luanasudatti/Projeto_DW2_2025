import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function Login({ onSwitchToRegister }) {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationLogin = yup.object().shape({
    email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
  });

  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src="/imagens/logo.png" alt="Logo" className="auth-logo" />
      </div>
      <div className="auth-header">
        <h1>Bem-vindo de volta</h1>
        <p className="subtitle">Faça login para acessar sua conta</p>
      </div>

      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
        <Form className="auth-form">
          <div className="form-group">
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage component="span" name="email" className="form-error" />
          </div>

          <div className="form-group">
            <Field name="password" type="password" className="form-field" placeholder="Senha" />
            <ErrorMessage component="span" name="password" className="form-error" />
          </div>

          <button className="auth-button" type="submit">
            <span>Entrar</span>
            <div className="button-glow"></div>
          </button>
        </Form>
      </Formik>

      <div className="auth-footer">
        <p>Não tem uma conta?</p>
        <button className="link-button" onClick={onSwitchToRegister}>
          Cadastre-se aqui
        </button>
      </div>

      <div className="decoration-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
}

export default Login;
