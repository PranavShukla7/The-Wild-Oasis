import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      // If user is immediately available (email confirmation disabled), log them in
      if (data.user) {
        queryClient.setQueryData(['user'], data.user);
        queryClient.invalidateQueries({ queryKey: ['user'] });
        toast.success("Account successfully created! Welcome!");
        navigate('/dashboard', { replace: true });
      } else {
        // Email confirmation required
        toast.success(
          "Account successfully created! Please check your email to verify your account before logging in."
        );
      }
    },
    onError: (err) => {
      const errorMessage = err?.message || 'Failed to create account. Please try again.';
      toast.error(errorMessage);
    },
  });

  return { signup, isLoading };
}
