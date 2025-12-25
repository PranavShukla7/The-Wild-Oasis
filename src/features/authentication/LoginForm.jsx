import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import { useResendConfirmation } from "./useResendConfirmation";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const { resendConfirmation, isLoading: isResending } = useResendConfirmation();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading || isResending}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
      {email && (
        <FormRowVertical>
          <p style={{ fontSize: "1.4rem", color: "var(--color-grey-600)", textAlign: "center" }}>
            Need to verify your email?{" "}
            <button
              type="button"
              onClick={() => resendConfirmation(email)}
              disabled={isResending || isLoading}
              style={{
                background: "none",
                border: "none",
                color: "var(--color-brand-600)",
                textDecoration: "underline",
                cursor: isResending || isLoading ? "not-allowed" : "pointer",
                fontWeight: "500",
                padding: 0,
              }}
            >
              {isResending ? "Sending..." : "Resend confirmation email"}
            </button>
          </p>
        </FormRowVertical>
      )}
    </Form>
  );
}

export default LoginForm;
