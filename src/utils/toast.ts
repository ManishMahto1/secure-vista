import { toast as hotToast } from 'react-hot-toast';

interface Toast {
  success: (message: string) => void;
  error: (message: string) => void;
}

export const toast: Toast = {
  success: (message: string) => hotToast.success(message),
  error: (message: string) => hotToast.error(message),
};
