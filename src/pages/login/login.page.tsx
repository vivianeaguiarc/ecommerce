import { LoginContainer, LoginHeadline, LoginInputContainer, LoginSubtitle } from "../home/login.styles";
import Header from "../../components/header/header.component";

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>
        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
        <LoginInputContainer>{/* Email input */}</LoginInputContainer>
        <LoginInputContainer>{/* Password input */}</LoginInputContainer>
      </LoginContainer>
    </>
  );
};

export default LoginPage