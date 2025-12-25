import { useMutation } from '@tanstack/react-query';
import { resendConfirmationEmail } from '../../services/apiAuth';
import { toast } from 'react-hot-toast';

export function useResendConfirmation() {
  const { mutate: resendConfirmation, isLoading } = useMutation({
    mutationFn: resendConfirmationEmail,
    onSuccess: () => {
      toast.success('Confirmation email sent! Please check your inbox.');
    },
    onError: (err) => {
      const errorMessage = err?.message || 'Failed to resend confirmation email. Please try again.';
      toast.error(errorMessage);
    },
  });

  return { resendConfirmation, isLoading };
}

