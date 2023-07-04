import { ReactNode } from "react";

const LoginForgotPasswordLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p>Login and ForgotPassword Layout</p>
      <div>{children}</div>
    </div>
  );
};
export default LoginForgotPasswordLayout;
