import styled from "styled-components";
import { Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
