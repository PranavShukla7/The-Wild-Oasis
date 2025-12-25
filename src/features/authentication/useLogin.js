import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data.user);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      let errorMessage = err?.message || 'Invalid login credentials';
      
      // Provide more helpful error messages
      if (errorMessage.toLowerCase().includes('email not confirmed') || 
          errorMessage.toLowerCase().includes('email_not_confirmed')) {
        errorMessage = 'Please verify your email address before logging in. Check your inbox for the confirmation email.';
      } else if (errorMessage.toLowerCase().includes('invalid login credentials') || 
          errorMessage.toLowerCase().includes('invalid credentials')) {
        errorMessage = 'Invalid email or password. Please check your credentials.';
      }
      
      toast.error(errorMessage, {
        duration: 6000, // Show longer for important messages
      });
    },
  });

  return { login, isLoading };
}
