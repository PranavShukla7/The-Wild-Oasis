import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import { Link } from "react-router-dom";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledLink = styled(Link)`
  color: var(--color-brand-600);
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    color: var(--color-brand-700);
  }
`;

function Signup() {
  return (
    <SignupLayout>
      <Logo />
      <Heading as="h4">Create your new account</Heading>
      <SignupForm />
      <p style={{ textAlign: "center", marginTop: "1.6rem" }}>
        Already have an account?{" "}
        <StyledLink to="/login">Log in instead</StyledLink>
      </p>
    </SignupLayout>
  );
}

export default Signup;

