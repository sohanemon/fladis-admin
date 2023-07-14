import { create } from 'zustand';

interface PasswordResetStateType {
  step: number;
  nextStep: () => void;
  prevStep?: () => void;
}

const usePasswordResetState = create<PasswordResetStateType>()((set) => ({
  step: 0,
  nextStep() {
    set((s) => ({ step: ++s.step }));
  },
}));

export default usePasswordResetState;
