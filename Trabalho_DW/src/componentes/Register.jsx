import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function Register({ onSwitchToLogin }) {
  const handleClickRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
    });
  };

  const validationRegister = yup.object().shape({
    email: yup.string().email("Não é um email válido").required("Este campo é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Este campo é obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais").required("Confirme sua senha")
  });

  return (
    <div className="auth-container">
      <div className="logo-container">
        <img src="/imagens/logo.png" alt="Logo" className="auth-logo" />
      </div>
      <div className="auth-header">
        <h1>Criar conta</h1>
        <p className="subtitle">Junte-se a nós e comece sua jornada</p>
      </div>

      <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
        <Form className="auth-form">
          <div className="form-group">
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage component="span" name="email" className="form-error" />
          </div>

          <div className="form-group">
            <Field name="password" type="password" className="form-field" placeholder="Senha" />
            <ErrorMessage component="span" name="password" className="form-error" />
          </div>

          <div className="form-group">
            <Field name="confirmPassword" type="password" className="form-field" placeholder="Confirme a senha" />
            <ErrorMessage component="span" name="confirmPassword" className="form-error" />
          </div>

          <button className="auth-button" type="submit">
            <span>Criar conta</span>
            <div className="button-glow"></div>
          </button>
        </Form>
      </Formik>

      <div className="auth-footer">
        <p>Já tem uma conta?</p>
        <button className="link-button" onClick={onSwitchToLogin}>
          Faça login aqui
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

export default Register;
